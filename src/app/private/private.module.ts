import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth-guard.service';
import { AdminOrdersComponent } from './components/admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { ProductFormComponent } from './components/admin/product-form/product-form.component';
import { CheckOutComponent } from './components/orders/check-out/check-out.component';
import { MyOrdersComponent } from './components/orders/my-orders/my-orders.component';
import { OrderSuccessComponent } from './components/orders/order-success/order-success.component';
import { AdminAuthGaurdService as AdminAuthGaurd } from '.././core/guards/admin-auth-gaurd.service';


@NgModule({
  declarations: [
    PrivateComponent
  ],
  imports: [
    PrivateRoutingModule,
    SharedModule,
    RouterModule.forRoot([{
      path: 'check-out',
      component: CheckOutComponent,
      canActivate: [AuthGuard],
    },
    {
      path: 'order-success',
      component: OrderSuccessComponent,
      canActivate: [AuthGuard],
    },
    {
      path: 'my/orders',
      component: MyOrdersComponent,
      canActivate: [AuthGuard],
    },
    {
      path: 'admin/products/new',
      component: ProductFormComponent,
      canActivate: [AuthGuard, AdminAuthGaurd],
    },
    {
      path: 'admin/products/:id',
      component: ProductFormComponent,
      canActivate: [AuthGuard, AdminAuthGaurd],
    },
    {
      path: 'admin/products',
      component: AdminProductsComponent,
      canActivate: [AuthGuard, AdminAuthGaurd],
    },
    {
      path: 'admin/orders',
      component: AdminOrdersComponent,
      canActivate: [AuthGuard, AdminAuthGaurd],
    },
    ]),
  ],
  providers: [AuthGuard, AdminAuthGaurd]
})
export class PrivateModule { }

