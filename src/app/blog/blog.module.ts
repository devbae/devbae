/** Angular Imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Custom Modules */
// import { SharedModule } from '../shared/shared.module';

/** Custom Components */
import { BlogPageComponent } from './blog-page/blog-page.component';

/**
 * Blog Module
 *
 * All Blog components should be declared here.
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BlogPageComponent
  ]
})
export class BlogModule { }
