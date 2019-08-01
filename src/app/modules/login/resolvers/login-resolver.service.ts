import { Resolve, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginResolverService implements Resolve<void> {
  constructor(private authService: AuthService, private router: Router) {}

  resolve(): void {
      this.authService.$isLoggedIn.subscribe(isLoggedIn => {
          if (isLoggedIn) {
            this.router.navigate(['/posts'], { queryParams: { categoryId: 1 } });
          }
      });
  }
}