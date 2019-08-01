import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './components/post/post.component';


@NgModule({
  declarations: [PostComponent, ],
  imports: [
    CommonModule,
    PostRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class PostModule { }
