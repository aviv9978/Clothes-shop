import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../../services/order.service';
import { Order } from '../../../models/order';
import { Observable } from 'rxjs';

@Component({
  selector: 'view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css'],
})
export class ViewOrderComponent implements OnInit {
  id?: string | null;
  order$!: Observable<Order | null>;
  constructor(private orderSerivce:OrderService,private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.order$ = this.orderSerivce.getOrder(this.id!);
  }
}
