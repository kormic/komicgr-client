import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPostComponent } from './components/add-post/add-post.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { AddPostResolverService } from './resolver/add-post-resolver.service';

const routes: Routes = [
  { 
    path: '',
    component: AddPostComponent,
    runGuardsAndResolvers: 'always',
    resolve: {
      addPostCategories: AddPostResolverService
    },
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddPostRoutingModule { }
