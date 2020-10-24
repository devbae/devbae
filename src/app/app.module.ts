/** Angular Imports */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// import { ServiceWorkerModule } from '@angular/service-worker';

/** Main Component */
import { AppComponent } from './app.component';

/** Not Found Component */
import { NotFoundComponent } from './not-found/not-found.component';

/** Custom Modules */
import { BlogModule } from './blog/blog.module';

/** Main Routing Module */
import { AppRoutingModule } from './app-routing.module';

/**
 * App Module
 *
 * Core module and all feature modules should be imported here in proper order.
 */
@NgModule({
  imports: [
    BrowserModule,
    BlogModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, NotFoundComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
