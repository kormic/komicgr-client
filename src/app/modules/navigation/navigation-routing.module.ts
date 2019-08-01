import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PostsGridComponent } from '../posts-grid/components/posts-grid/posts-grid.component';

const routes: Routes = [
  { path: 'posts', component: PostsGridComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
