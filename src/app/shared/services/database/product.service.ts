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

  getProducts() {
    return this.db
      .list<Product>('/products')
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => ({ key: a.key, ...a.payload.val() } as Product))
        )
      );
  }

  getProduct(productId: string): AngularFireObject<Product> {
    return this.db.object(`/products/${productId}`);
  }

  update(productId: string, product: Product) {
    return this.db.object(`/products/${productId}`).update(product);
  }

  delete(productId: string) {
    return this.db.object(`/products/${productId}`).remove();
  }
}
