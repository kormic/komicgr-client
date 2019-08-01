import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { PostsGridComponent } from './components/posts-grid/posts-grid.component';
import { PostsGridResolverService } from './resolvers/posts-grid/posts-grid-resolver.service';
import { PostsGridRoutingModule } from './posts-grid-routing-module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [PostsGridComponent],
  imports: [
    CommonModule,
    SharedModule,
    PostsGridRoutingModule,
    MaterialModule
  ],
  exports: [PostsGridComponent],
  providers: [PostsGridResolverService]
})
export class PostsGridModule { }
