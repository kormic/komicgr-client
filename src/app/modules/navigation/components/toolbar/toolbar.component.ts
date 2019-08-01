import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/core/services/auth/auth.service';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/modules/core/services/categories/categories.service';
import { Observable } from 'rxjs';
import { Category } from 'src/app/domain/model/Category';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() logoIconClicked = new EventEmitter();

  categories$: Observable<Category[]>;

  constructor(public authService: AuthService, private router: Router, private categoriesService: CategoriesService) {}

  ngOnInit() {
    this.categories$ = this.categoriesService.$categories;
  }

  navigateToHome() {
    // TODO: Remove the hardcoded category id and pass the first category from categories
    this.router.navigate(['/posts'], { queryParams: { categoryId: 1 } });
  }

  logout() {
    this.authService.logoutUser();
    this.router.navigate(['login']);
  }
}
