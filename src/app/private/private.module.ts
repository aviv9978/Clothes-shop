import { NgModule } from '@angular/core';

import { PrivateComponent } from './private.component';

import { AuthGuard } from '../core/guards/auth-guard.service';

import { AdminAuthGaurdService as AdminAuthGaurd } from '.././core/guards/admin-auth-gaurd.service';
import { OrderService } from './services/order.service';
import { PrivateRoutingModule } from './private-routing.module';
import { ShippingFormComponent } from './components/shipping/shipping-form/shipping-form.component';
import { OrderDetailsComponent } from './components/orders/order-details/order-details.component';
import { ViewOrderComponent } from './components/admin/view-order/view-order.component';


@NgModule({
  declarations: [
    PrivateComponent,
    
  ],
  imports: [PrivateRoutingModule],
  providers: [AuthGuard, AdminAuthGaurd,OrderService]
})
export class PrivateModule { }

