import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { LoaderService } from '../loader/loader.service';
import { catchError, finalize } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoaderHttpInteceptorService implements HttpInterceptor {

  constructor(private loaderService: LoaderService, private jwtHelperService: JwtHelperService, private router: Router, private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.showLoader();

    return next.handle(req).pipe(catchError((e: HttpErrorResponse) => {
      if (e.status === 401) {
        this.authService.logoutUser();
        this.router.navigateByUrl('/login');
      }
      return throwError(e);
    }), finalize(() => this.loaderService.hideLoader()));
  }

}
