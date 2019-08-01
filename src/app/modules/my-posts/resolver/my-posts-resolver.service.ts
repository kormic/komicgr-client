import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PostsService } from '../../core/services/posts/posts.service';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class MyPostsResolverService implements Resolve<any> {
  constructor(private router: Router, private postsService: PostsService, private jwtHelper: JwtHelperService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | void {
    const decodedToken = this.jwtHelper.decodeToken();

    if (decodedToken.Id) {
      return this.postsService.getPostsByUserId(decodedToken.Id, +route.queryParams.offset, +route.queryParams.limit);
    }

    this.router.navigate(['login']);
  }
}
