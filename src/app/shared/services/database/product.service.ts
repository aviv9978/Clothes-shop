import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { map } from 'rxjs';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private db: AngularFireDatabase) {}

  create(product: any) {
    return this.db.list('/products').push(product);
  }

  getAll() {
    return this.db
      .list<Product>('/products')
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => ({ key: a.payload.key, ...a.payload.val() }))
        )
      );
  }

  getProduct(productId: string): AngularFireObject<Product> {
    return this.db.object(`/products/${productId}`);
  }
}
