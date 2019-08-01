import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'login', loadChildren: './modules/login/login.module#LoginModule' },
  { path: 'register', loadChildren: './modules/register/register.module#RegisterModule' },
  { path: 'posts', loadChildren: './modules/posts-grid/posts-grid.module#PostsGridModule' },
  { path: 'post', loadChildren: './modules/post/post.module#PostModule' },
  { path: 'add-post', loadChildren: './modules/add-post/add-post.module#AddPostModule' },
  { path: 'my-posts', loadChildren: './modules/my-posts/my-posts.module#MyPostsModule' },
  { path: 'profile', loadChildren: './modules/profile/profile.module#ProfileModule' },
  { path: '**', loadChildren: './modules/page-not-found/page-not-found.module#PageNotFoundModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
