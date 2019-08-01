import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { CategoriesService } from 'src/app/modules/core/services/categories/categories.service';
import { Category } from 'src/app/domain/model/Category';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;

  categories$: Observable<Category[]>;

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categories$ = this.categoriesService.$categories;
  }

  onCloseSideNav() {
    console.log('closing');
    this.sidenav.close();
  }
}
