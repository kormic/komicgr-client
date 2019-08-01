import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpParentService } from '../http-parent/http-parent.service';
import { Category } from 'src/app/domain/model/Category';
import { CategoriesResponseDTO } from 'src/app/domain/dto/CategoriesResponseDTO';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private headers: HttpHeaders;
  selectedCategory: Category;

  private categoriesSubject = new BehaviorSubject([]);
  $categories: Observable<Category[]> = this.categoriesSubject.asObservable();

  constructor(private httpParent: HttpParentService) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  }

  fetchPostCategories() {
    this.httpParent.getRequest('/categories', this.headers).pipe(
      tap((response: CategoriesResponseDTO) => {
        if (response.success) {
          this.categoriesSubject.next(response.categories);
        }
      })
    ).subscribe();
  }
}
