import { AuthService } from './core/authentication/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { BsNavbarComponent } from './shared/components/bs-navbar/bs-navbar.component';
import { ShoppingCartComponent } from './public/components/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './private/components/orders/check-out/check-out.component';
import { OrderSuccessComponent } from './private/components/orders/order-success/order-success.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from './shared/services/database/category.service';
import { ProductService } from './shared/services/database/product.service';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialsModule } from './shared/modules/angular-materials.module';
import { ShoppingCartService } from './shared/services/database/shopping-cart.service';
import { ProductCardComponent } from './shared/components/product-materials/product-card/product-card.component';
import { AuthGuard } from './core/guards/auth-guard.service';
import { UserService } from './core/services/user.service';
import { PublicModule } from './public/public.module';
import { AdminOrdersComponent } from './private/components/admin/admin-orders/admin-orders.component';
import { ProductFormComponent } from './private/components/admin/product-form/product-form.component';
import { LoginComponent } from './public/components/login/login.component';
import { ProductsFilterComponent } from './shared/components/product-materials/products-filter/products-filter.component';
import { MyOrdersComponent } from './private/components/orders/my-orders/my-orders.component';
import { HomeComponent } from './public/components/home/home.component';
import { ProductQuantityComponent } from './shared/components/product-materials/product-quantity/product-quantity.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { AppComponent } from './app.component';
import { AdminProductsComponent } from './private/components/admin/admin-products/admin-products.component';
import { PrivateModule } from './private/private.module';
import { PublicComponent } from './public/public.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,
    ProductCardComponent,
    ProductsFilterComponent,
    ProductQuantityComponent,
  ],
  imports: [
    SharedModule,
    CustomFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([{ path: '', component: PublicComponent }]),
    NgbModule,
    AngularMaterialsModule,
    BrowserAnimationsModule,
    PrivateModule,
    PublicModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
