import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../core/services/user-service/user-service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolverService implements Resolve<any> {

  constructor(private userService: UserService) { }

  resolve(): Observable<any> {
    return this.userService.getUserProfile().pipe(map(profileResponse => profileResponse.user));
  }
}
