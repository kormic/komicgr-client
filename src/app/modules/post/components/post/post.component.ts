import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/domain/model/Post';
import { LikePostDTO } from '../../../../domain/dto/LikePostDTO';
import { PostsService } from 'src/app/modules/core/services/posts/posts.service';
import { environment } from 'src/environments/environment';
import { UserProfile } from 'src/app/domain/model/UserProfile';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
    // TODO: This doesn't look so good. Maybe create a
  // service to get this data from or pass it an http interceptor
  environment = environment;
  likesHovered: boolean;
  userInfo: UserProfile;
  post: Post;
  time = new Date().getTime();
  likePostDTO: LikePostDTO = {
    like: false,
    post_id: -1
  };
  userId: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private postsService: PostsService, private jwtHelper: JwtHelperService) {
    this.userId = !this.jwtHelper.isTokenExpired() ? this.jwtHelper.decodeToken(localStorage.getItem('access_token')).Id : undefined;
   }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.userInfo = data.postPageData[0].user;
      this.post = data.postPageData[1].post;
      this.likePostDTO.like = data.postPageData[2].like;
    });
    this.activatedRoute.queryParams.subscribe(params => this.likePostDTO.post_id = params.postId);
  }

  togglePostLike() {
    this.likePostDTO.like = !this.likePostDTO.like;
    this.postsService.likePost(this.likePostDTO).subscribe(response => {
      this.postsService.getNumberOfPostLikes(this.likePostDTO.post_id).subscribe((noOfLikes: any) => {
        this.post.likes = noOfLikes.likes;
      })
    });
  }

  deletePost() {
    const confirmDeletion = confirm('Are you sure you want to delete this post?');
    
    if (confirmDeletion) {
      this.postsService.deletePost(this.post.id).subscribe(() => {
        this.router.navigate(['/posts'])
      })
    }
  }
}
