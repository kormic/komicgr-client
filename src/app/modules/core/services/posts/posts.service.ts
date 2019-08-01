import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { HttpParentService } from '../http-parent/http-parent.service';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { AddPostDTO } from '../../../../domain/dto/AddPostDTO';
import { AddPostResponseDTO } from '../../../../domain/dto/AddPostResponseDTO';
import { LikePostDTO } from 'src/app/domain/dto/LikePostDTO';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private headers: HttpHeaders;

  constructor(private httpParent: HttpParentService) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  }

  getPostsByCategory(categoryId: number, offset: number = 0, limit: number = 6): Observable<any[]> {
    return this.httpParent
      .getRequest(`/posts/?categoryId=${categoryId}&offset=${offset || 0}&limit=${limit || 6}`);
  }

  getPostByPostId(postId: number): Observable<any> {
    return this.httpParent.getRequest(`/posts/${postId}`);
  }

  getPostsByUserId(userId: number, offset: number = 0, limit: number = 6): Observable<any[]> {
    return this.httpParent.getRequest(`/posts/user/${userId}?offset=${offset}&limit=${limit}`);
  }

  addPost(post: AddPostDTO): Observable<AddPostResponseDTO> {
    return this.httpParent.postRequest(`/posts/add`, post).pipe(
      catchError((errorResponse: HttpErrorResponse) => throwError(errorResponse)));
  }

  likePost(likePostDTO: LikePostDTO): Observable<any> {
    return this.httpParent.postRequest('/posts/like', likePostDTO);
  }

  getUserPostLikeStatus(postId: number): Observable<any> {
    return this.httpParent.getRequest(`/posts/like/${postId}`);
  }

  getNumberOfPostLikes(postId: number): Observable<any> {
    return this.httpParent.getRequest(`/posts/likes/${postId}`);
  }

  // setPostCategory(postId: number, categoryId: number): Observable<GeneralResponseDTO> { 
  //   let authToken = this.httpParent.getToken(); 
  //   let headers = new HttpHeaders({'Authorization': authToken}); 
  //   let body = { 
  //     Post_id: postId, 
  //     Category_id: categoryId 
  // } 
  //   return this.httpParent.postRequest(`/categories/setToPost`, body).map(res => <GeneralResponseDTO>res); 
  // }
}
