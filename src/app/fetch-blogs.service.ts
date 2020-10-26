import { Injectable } from '@angular/core';
// import { AngularFirestore  } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { BlogsModel } from './models/blogs';

@Injectable({
  providedIn: 'root'
})
export class FetchBlogsService {

  private dbPath = '/blog';

  tutorialsRef: AngularFireList<BlogsModel> = null;

  constructor(private firedb: AngularFireDatabase) {
    this.tutorialsRef = firedb.list(this.dbPath);
   }

   getAll(): AngularFireList<BlogsModel> {
    return this.tutorialsRef;
  }

  create(tutorial: BlogsModel): any {
    return this.tutorialsRef.push(tutorial);
  }

  update(key: string, value: any): Promise<void> {
    return this.tutorialsRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.tutorialsRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.tutorialsRef.remove();
  }
}
