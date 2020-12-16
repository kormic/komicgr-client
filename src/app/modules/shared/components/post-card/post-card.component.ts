import { Component, OnInit, Input } from "@angular/core";
import { Post } from "src/app/domain/model/Post";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-post-card",
  templateUrl: "./post-card.component.html",
  styleUrls: ["./post-card.component.css"],
})
export class PostCardComponent implements OnInit {
  @Input() post: Post;

  // TODO: This doesn't look so good. Maybe create a
  // service to get this data from or pass it an http interceptor
  environment = environment;
  userSampleLogoPath = "@assets/images/user-sample-logo.jpg";

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToPostPage() {
    this.router.navigate(["post"], { queryParams: { postId: this.post.id } });
  }
}
