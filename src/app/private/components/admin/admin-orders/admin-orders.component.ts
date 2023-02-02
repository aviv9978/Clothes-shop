import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/private/models/order';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css'],
})
export class AdminOrdersComponent implements OnInit {
  orders$?: Observable<Order[]>;
  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orders$ = this.orderService.getOrders();
  }
}
