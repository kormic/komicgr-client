import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CategoriesService } from 'src/app/modules/core/services/categories/categories.service';
import { filter, switchMap, take } from 'rxjs/operators';
import { Category } from 'src/app/domain/model/Category';
import { PostsService } from 'src/app/modules/core/services/posts/posts.service';

@Injectable()
export class PostsGridResolverService implements Resolve<any> {
  constructor(
    private router: Router,
    private categoriesService: CategoriesService,
    private postsService: PostsService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.categoriesService.$categories
      .pipe(
        filter(cats => cats.length > 0),
        take(1),
        switchMap((categories) => of(this.categoryIdIsValid(categories, route.queryParams.categoryId))),
        switchMap(
          ({ valid, categories }) => {
            if (valid) {
              return this.postsService
                .getPostsByCategory(+route.queryParams.categoryId, +route.queryParams.offset || 0, +route.queryParams.limit || 6);
              } else if (categories.length) {
                return this.postsService
                .getPostsByCategory(categories[0].id, +route.queryParams.offset || 0, +route.queryParams.limit || 6);
              } else {
                this.router.navigate(['page-not-found'] );
              }
            }
        ),
      );
  }

  private categoryIdIsValid(categories: Category[], id: string): { valid: boolean, categories: Category[] } {
    const valid = categories.filter(c => c.id === +id).length > 0;

    return { valid, categories };
  }
}
