import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as config from '../../../../../assets/config.json';
import { AddPostDTO } from 'src/app/domain/dto/AddPostDTO.js';
import { PostsService } from 'src/app/modules/core/services/posts/posts.service.js';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/domain/model/Category.js';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  fetchedCategories: Category[];
  config = config.TINY_MCE_CONFIG;
  tinyMCEFormGroup: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private postsService: PostsService,
    private jwtHelperService: JwtHelperService
  ) { }

  ngOnInit() {
    this.tinyMCEFormGroup = this.fb.group({
      postCategoryControl: this.fb.control('', [Validators.required]),
      postDescriptionControl: this.fb.control(''),
      postTitleControl: this.fb.control('', [Validators.required]),
      postImageUrlControl: this.fb.control( '', [Validators.required]),
      tinyMCEControl: this.fb.control('', [Validators.required])
    });
    this.activatedRoute.data.subscribe(data => {
      this.fetchedCategories = data.addPostCategories;
      this.tinyMCEFormGroup.get('postCategoryControl').patchValue(this.fetchedCategories[0]);
    });
  }

  uploadPost() {
    const decodedToken = this.jwtHelperService.decodeToken();
    const now = new Date();

    const addPostDTO: AddPostDTO = {
      user_id: decodedToken.Id,
      title: this.tinyMCEFormGroup.get('postTitleControl').value,
      short_body: this.tinyMCEFormGroup.get('postDescriptionControl').value,
      body: this.tinyMCEFormGroup.get('tinyMCEControl').value,
      createdAt: now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate(),
      imageUrl: this.tinyMCEFormGroup.get('postImageUrlControl').value,
      categoryId: this.tinyMCEFormGroup.get('postCategoryControl').value.id
    };

    this.postsService.addPost(addPostDTO).subscribe(response => console.log(response));
  }
}
