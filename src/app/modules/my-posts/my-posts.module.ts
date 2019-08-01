import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { MyPostsRoutingModule } from './my-posts-routing.module';

import { MyPostsComponent } from './components/my-posts/my-posts.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [MyPostsComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MaterialModule,
    MyPostsRoutingModule
  ]
})
export class MyPostsModule { }
