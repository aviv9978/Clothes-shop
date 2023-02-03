import { Component, OnInit } from '@angular/core';
import { AppUser } from '../../models/app-user';
import { AuthService } from '../../../core/authentication/auth.service';
import { ShoppingCartService } from '../../services/database/shopping-cart.service';
import { ShoppingCart } from '../../models/shopping-cart';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/core/services/login.service';
@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css'],
})
export class BsNavbarComponent implements OnInit {
  appUser!: AppUser;
  cart$!: Observable<ShoppingCart>;

  constructor(
    private auth: AuthService,
    private loginService: LoginService,

    private shopingCartService: ShoppingCartService
  ) {}

  async ngOnInit() {
    this.auth.appUser$.subscribe((appUser) => (this.appUser = appUser!));
    this.cart$ = await this.shopingCartService.getCart();
  }

  logout() {
    this.loginService.logout();
  }
}
