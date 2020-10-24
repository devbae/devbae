/** Angular Imports */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Routing Imports */
import { Route } from '../core/route/route.service';

/** Custom Components */
import { BlogPageComponent } from './blog-page/blog-page.component';

/** Custom Resolvers */
// import { ViewShareAccountResolver } from './view-share-account/view-share-account.resolver';

/** Blog Routes */
const routes: Routes = [
  Route.withShell([
    {
      path: 'blog/:blog-name',
      component: BlogPageComponent,
      data: { title: 'Blog Home', breadcrumb: 'Blog Home' },
      // resolve: {
      //   shareAccount: ViewShareAccountResolver
      // }
    }
  ])
];

/**
 * Blog Routing Module
 *
 * Configures the blog routes.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    // ViewShareAccountResolver
  ]
})
export class SharesRoutingModule { }
