import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of, forkJoin } from 'rxjs';
import { isUndefined } from 'util';
import { PostsService } from '../../core/services/posts/posts.service';
import { UserService } from '../../core/services/user-service/user-service';

@Injectable({
  providedIn: 'root'
})
export class PostResolverService implements Resolve<any> {
  constructor(private router: Router, private postsService: PostsService, private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | void {
    if (!isUndefined(route.queryParams.postId) && route.queryParams.postId.length > 0) {
      return forkJoin([
        this.userService.getUserByPostId(+route.queryParams.postId),
        this.postsService.getPostByPostId(+route.queryParams.postId),
        this.postsService.getUserPostLikeStatus(+route.queryParams.postId)
      ]);
    }

    this.router.navigate(['page-not-found']);
  }
}