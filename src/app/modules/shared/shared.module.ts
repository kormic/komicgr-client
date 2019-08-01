import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { PostCardComponent } from './components/post-card/post-card.component';
import { SafeHtmlPipe } from './pipes/safeHtml/safe-html.pipe';

@NgModule({
  declarations: [PostCardComponent, SafeHtmlPipe],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [PostCardComponent, SafeHtmlPipe]
})
export class SharedModule { }
