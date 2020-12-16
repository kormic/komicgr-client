import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/domain/model/Post';
import { LikePostDTO } from '../../../../domain/dto/LikePostDTO';
import { PostsService } from 'src/app/modules/core/services/posts/posts.service';
import { environment } from 'src/environments/environment';
import { UserProfile } from 'src/app/domain/model/UserProfile';

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

  constructor(private activatedRoute: ActivatedRoute, private postsService: PostsService) { }

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
}
