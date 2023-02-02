import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { Order } from '../models/order';
import { ShoppingCartService } from '../../shared/services/database/shopping-cart.service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(
    private db: AngularFireDatabase,
    private shoppingCartService: ShoppingCartService
  ) {}

  async placeOrder(order: Order) {
    let result = await this.db.list('/orders').push(order);
    this.clearCart();
    return result;
  }

  getOrder(orderId: string) {
    return this.db.object<Order>('/orders/' + orderId).valueChanges();
  }

  getOrders(): Observable<Order[]> {
    return this.db
      .list<Order>('/orders')
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => ({ key: a.key, ...a.payload.val() } as Order))
        )
      );
  }

  getOrdersByUser(userId: string): Observable<Order[]> {
    return this.db
      .list<Order>('/orders',(query) => query.orderByChild('userId').equalTo(`${userId}`))
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => ({ key: a.key, ...a.payload.val() } as Order))
        )
      );
  }

  private clearCart() {
    this.shoppingCartService.clearCart();
  }
}
