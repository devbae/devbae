import { FetchBlogsService } from './fetch-blogs.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { BlogsShowComponent } from './blogs-show/blogs-show.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogsShowComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [FetchBlogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
