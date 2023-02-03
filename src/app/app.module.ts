import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ng2-validation';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { CheckOutComponent } from './private/components/orders/check-out/check-out.component';
import { MyOrdersComponent } from './private/components/orders/my-orders/my-orders.component';
import { OrderDetailsComponent } from './private/components/orders/order-details/order-details.component';
import { OrderSuccessComponent } from './private/components/orders/order-success/order-success.component';
import { ShippingFormComponent } from './private/components/shipping/shipping-form/shipping-form.component';
import {
  ShoppingCartSummaryComponent,
} from './private/components/shipping/shopping-cart-summary/shopping-cart-summary.component';
import { PrivateModule } from './private/private.module';
import { HomeComponent } from './public/components/home/home.component';
import { ShoppingCartComponent } from './public/components/shopping-cart/shopping-cart.component';
import { PublicComponent } from './public/public.component';
import { PublicModule } from './public/public.module';
import { BsNavbarComponent } from './shared/components/bs-navbar/bs-navbar.component';
import { AngularMaterialsModule } from './shared/modules/angular-materials.module';
import { SharedModule } from './shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    OrderDetailsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
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
    FontAwesomeModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    
  ],
})
export class AppModule {}
