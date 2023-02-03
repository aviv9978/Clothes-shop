import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ProductCardComponent } from './components/product-materials/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-materials/product-quantity/product-quantity.component';
import { ProductsComponent } from './components/products/products.component';
import { AuthService } from '../core/authentication/auth.service';
import { UserService } from '../core/services/user.service';
import { CategoryService } from './services/database/category.service';
import { ProductService } from './services/database/product.service';
import { ShoppingCartService } from './services/database/shopping-cart.service';
import { ProductsFilterComponent } from './components/product-materials/products-filter/products-filter.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
    ProductsComponent,
    ProductsFilterComponent
  ],
  imports: [CommonModule,RouterModule],
  exports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ProductCardComponent,
    ProductQuantityComponent,
    ProductsComponent, 
  ],
  providers: [
    AuthService,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
  ],
})
export class SharedModule {}
