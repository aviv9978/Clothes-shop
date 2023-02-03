import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { AdminAuthGaurdService as AdminAuthGaurd } from 'src/app/core/guards/admin-auth-gaurd.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularMaterialsModule } from '../../../shared/modules/angular-materials.module';
import { ProductCardComponent } from '../../../shared/components/product-materials/product-card/product-card.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [
    AdminOrdersComponent,
    AdminProductsComponent,
    ProductFormComponent,
    ViewOrderComponent,
    
  ],
  imports: [CommonModule,FormsModule,RouterModule,AngularMaterialsModule,SharedModule],
  providers: [AdminAuthGaurd],
})
export class AdminModule {}
