import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpParentService {

  constructor(private http: HttpClient) { }

  getRequest(url: string, headers?: HttpHeaders): Observable<any> {
    return this.http.get(environment.url + url, { headers });
  }

  postRequest(url: string, body: any, headers?: HttpHeaders): Observable<any> {
      return this.http.post(environment.url + url, body, { headers });
  }

  getToken(): string | null {
    const storedToken = localStorage.getItem('token');

    return storedToken;
  }
}
