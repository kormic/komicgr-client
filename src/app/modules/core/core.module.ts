import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationModule } from '../navigation/navigation.module';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SidenavComponent } from '../navigation/components/sidenav/sidenav.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth/auth.service';
import { CategoriesService } from './services/categories/categories.service';
import { PostsService } from './services/posts/posts.service';
import { LoaderHttpInteceptorService } from './services/interceptors/loader-http-inteceptor.service';
import { LoaderComponent } from './components/loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [LoaderComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ['localhost:3000','api.komic.gr'],
        authScheme: 'JWT '
      }
    }),
    NavigationModule,
    MatProgressSpinnerModule
  ],
  exports: [SidenavComponent, LoaderComponent],
  providers: [
    AuthGuard,
    CategoriesService,
    PostsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderHttpInteceptorService,
      multi: true
    }
  ]
})
export class CoreModule { }
