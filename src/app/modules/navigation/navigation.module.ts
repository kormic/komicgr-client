import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NavigationRoutingModule } from './navigation-routing.module';
import { PostsGridModule } from '../posts-grid/posts-grid.module';
import { SideNavListComponent } from './components/side-nav-list/side-nav-list.component';


@NgModule({
  declarations: [ToolbarComponent, SidenavComponent, SideNavListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    NavigationRoutingModule,
    PostsGridModule
  ],
  exports: [SidenavComponent]
})
export class NavigationModule { }
