import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map, Observable } from 'rxjs';
import { Category } from '../../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private db: AngularFireDatabase) {}

  getCategories() {
    return this.db
      .list<Category>('/categories', (Query) => Query.orderByChild('name'))
      .snapshotChanges()
      .pipe(
        map((actions) =>
        actions.map((a) => ({ key: a.key, ...a.payload.val() } as Category))
        )
      ) ;
  }
}
