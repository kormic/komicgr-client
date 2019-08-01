import { Injectable, isDevMode } from '@angular/core';
import { HttpParentService } from '../../services/http-parent/http-parent.service';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { RegisterUserDTO } from 'src/app/domain/dto/RegisterUserDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: any;
  headers: HttpHeaders;

  constructor(private httpParent: HttpParentService) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
  }

  registerUser(user: RegisterUserDTO): Observable<any> {
    return this.httpParent.postRequest('/users/register', user, this.headers);
  }

  getUserProfile(): Observable<any> {
    return this.httpParent.getRequest('/users/profile');
  }

  getUserByPostId(postId: number): Observable<any> {
    return this.httpParent.getRequest('/users/byPostId/' + postId);
  }

  setProfileImageUrl(imageUrl: string): Observable<any> {
    const authToken = this.httpParent.getToken();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', authToken);

    const body = {
        profileImageUrl: imageUrl
    };

    return this.httpParent.postRequest('/users/uploadProfileImageUrl', body, headers);
  }

  uploadProfileImage(file): Observable<any> {
    const formData = new FormData();
    formData.append('userFile', file, file.name);

    return this.httpParent.postRequest('/users/uploadImage', formData);
  }

  sendEmail(email: string): Observable<{ success: boolean }> {
    return this.httpParent.postRequest('/users/sendEmail', { email }) as Observable<{ success: boolean }>;
  }

  resetPassword(resetToken: string, password: string): Observable<{ success: boolean }> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', 'JWT ' + resetToken);

    return this.httpParent.postRequest('/users/resetPassword', { newPassword: password }, headers) as Observable<{ success: boolean }>;
  }
}

interface Credentials {
  username: string;
  password: string;
}
