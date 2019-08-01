import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PostsGridComponent } from './components/posts-grid/posts-grid.component';
import { PostsGridResolverService } from './resolvers/posts-grid/posts-grid-resolver.service';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: PostsGridComponent,
        runGuardsAndResolvers: 'always',
        resolve: {
            postsResponse: PostsGridResolverService
        }
    }
];

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
export class PostsGridRoutingModule {}
