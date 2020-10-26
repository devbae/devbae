import { BlogsModel } from './../models/blogs';
import { Component, OnInit } from '@angular/core';
import { FetchBlogsService } from '../fetch-blogs.service';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-blogs-show',
  templateUrl: './blogs-show.component.html',
  styleUrls: ['./blogs-show.component.scss']
})
export class BlogsShowComponent implements OnInit {
  blog: BlogsModel;
  submitted: boolean;
  blogsRet: any;

  constructor(private blogsService: FetchBlogsService) { 
    this.blog = new BlogsModel("lakshay", "blog title", "asd");
  }

  saveBlog(): void {
    this.blogsService.create(this.blog).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  retrieveBlogs(): void {
    this.blogsService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.blogsRet = data;
    });
  }

  ngOnInit(): void {
    this.retrieveBlogs();
  }

}
