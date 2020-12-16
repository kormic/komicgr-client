import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { UserService } from '../../core/services/user-service/user-service';
import { UserProfile } from 'src/app/domain/model/UserProfile';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolverService implements Resolve<UserProfile> {

  constructor(private userService: UserService) { }

  resolve() {
    return this.userService.getUserProfile().pipe(map(profile => profile.user));
  }
}
