import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyPostsComponent } from './components/my-posts/my-posts.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { MyPostsResolverService } from './resolver/my-posts-resolver.service';

const routes: Routes = [
  { 
    path: '',
    component: MyPostsComponent,
    runGuardsAndResolvers: 'always',
    resolve: {
      myPostsData: MyPostsResolverService
    },
    canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyPostsRoutingModule { }
