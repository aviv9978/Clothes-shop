import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, switchMap } from 'rxjs';
import { Order } from 'src/app/private/models/order';
import { OrderService } from '../../../services/order.service';
import { AuthService } from '../../../../core/authentication/auth.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css'],
})
export class MyOrdersComponent implements OnInit {
  orders$?: Observable<Order[]>;

  constructor(private auth: AuthService, private orderService: OrderService) {}

  ngOnInit(): void {
    this.orders$ = this.auth.user$.pipe(switchMap(user => this.orderService.getOrdersByUser(user?.uid!)))
  }

}
