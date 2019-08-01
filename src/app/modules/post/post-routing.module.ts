import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { PostResolverService } from './resolvers/post-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: PostComponent,
    runGuardsAndResolvers: 'always',
    resolve: {
      postPageData: PostResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
