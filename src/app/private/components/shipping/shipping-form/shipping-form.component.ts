import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { Order } from 'src/app/private/models/order';
import { OrderService } from 'src/app/private/services/order.service';
import { ShoppingCart } from 'src/app/shared/models/shopping-cart';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css'],
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  shipping: any = {};
  userId?: string;
  userSubscription?: Subscription;
  @Input('cart') cart!: ShoppingCart;

  constructor(
    private orderService: OrderService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userSubscription = this.authService.user$.subscribe(
      (user) => (this.userId = user?.uid)
    );
  }
  async placeOrder() {
    let order = new Order(this.userId!, this.shipping, this.cart!);
    let result = await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success/' + result.key]);
  }

  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe();
  }
}
