import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule) },
  { path: 'posts', loadChildren: () => import('./modules/posts-grid/posts-grid.module').then(m => m.PostsGridModule) },
  { path: 'post', loadChildren: () => import('./modules/post/post.module').then(m => m.PostModule) },
  { path: 'add-post', loadChildren: () => import('./modules/add-post/add-post.module').then(m => m.AddPostModule) },
  { path: 'my-posts', loadChildren: () => import('./modules/my-posts/my-posts.module').then(m => m.MyPostsModule) },
  { path: 'profile', loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule) },
  { path: '**', loadChildren: () => import('./modules/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
