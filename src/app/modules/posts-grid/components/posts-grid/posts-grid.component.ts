import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/domain/model/Post';

interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-posts-grid',
  templateUrl: './posts-grid.component.html',
  styleUrls: ['./posts-grid.component.css']
})
export class PostsGridComponent implements OnInit {
  posts: Post[];
  pageSizeOptions = [6, 12, 18];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.posts = data.postsResponse.posts;
    });
  }

  paginate(event: any) {
    this.router.navigate(['posts'], {
        queryParams: {
          categoryId: this.posts[0].categoryId,
          offset: (+event.pageIndex * +event.pageSize),
          limit: +event.pageSize
        }
    });
  }
}
