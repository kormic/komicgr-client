import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { LoginResponseDTO } from 'src/app/domain/dto/LoginResponseDTO';
import { HttpParentService } from '../http-parent/http-parent.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private headers: HttpHeaders;
  private loggedIn = new BehaviorSubject(this.hasToken());
  $isLoggedIn = this.loggedIn.asObservable();

  constructor(private httpParent: HttpParentService) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  }

  loginUser(credentials: { username: string, password: string }): Observable<LoginResponseDTO> {
    const body = {
      username: credentials.username,
      password: credentials.password
    };

    return this.httpParent.postRequest('/users/authenticate', body, this.headers)
      .pipe(
        catchError((error) => {
          this.loggedIn.next(false);
          return throwError(error);
        }),
        tap((response: LoginResponseDTO) => {
          if (response.success) {
            this.storeToken(response.token);
            this.loggedIn.next(true);
          }
        }));
  }

  logoutUser() {
    localStorage.removeItem('user');
    localStorage.removeItem('access_token');
    this.loggedIn.next(false);
  }

  private storeToken(token: string) {
    localStorage.setItem('access_token', token);
  }

  private hasToken(): boolean {
    return localStorage.hasOwnProperty('access_token');
  }
}
