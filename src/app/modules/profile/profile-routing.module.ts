import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { ProfileResolverService } from './resolver/profile-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    runGuardsAndResolvers: 'always',
    resolve: {
      profileData: ProfileResolverService
    },
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
