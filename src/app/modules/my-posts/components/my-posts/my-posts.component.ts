import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/domain/model/Post';
import { CategoriesService } from 'src/app/modules/core/services/categories/categories.service';
import { Category } from 'src/app/domain/model/Category';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {
  posts: Post[];
  categories: Category[];
  pageSizeOptions = [6, 12, 18];
  searchByTitleFilterValue = '';
  searchByTagFilterValue = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private categoriesService: CategoriesService
  ) { }

  ngOnInit() {
    this.categoriesService.$categories.subscribe(cats => this.categories = cats);
    this.activatedRoute.data.subscribe(data => {
      this.posts = data.myPostsData.posts;
    });
  }

  navigateToAddPost() {
    this.router.navigate(['add-post']);
  }

  paginate(event: any) {
    this.router.navigate(['my-posts'], {
        queryParams: {
          offset: (+event.pageIndex * +event.pageSize),
          limit: +event.pageSize
        }
    });
  }
}
