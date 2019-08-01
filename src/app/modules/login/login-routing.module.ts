import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { LoginResolverService } from './resolvers/login-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    runGuardsAndResolvers: 'always',
    resolve: { loginFormResolver: LoginResolverService }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
