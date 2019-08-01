import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { AddPostRoutingModule } from './add-post-routing.module';
import { EditorModule } from '@tinymce/tinymce-angular';

import { AddPostComponent } from './components/add-post/add-post.component';

@NgModule({
  declarations: [AddPostComponent],
  imports: [
    CommonModule,
    AddPostRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    EditorModule
  ]
})
export class AddPostModule { }
