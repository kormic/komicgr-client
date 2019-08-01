import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './modules/core/services/categories/categories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  opened = true;

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit() {
    this.categoriesService.fetchPostCategories();
  }
}
