import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CategoriesService } from '../../core/services/categories/categories.service';
import { filter, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddPostResolverService implements Resolve<any> {

  constructor(
    private categoriesService: CategoriesService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.categoriesService.$categories.pipe(
      filter(cats => cats.length > 0),
      take(1)
    );
  }

}
