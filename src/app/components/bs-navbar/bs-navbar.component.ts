import { Component, OnInit } from '@angular/core';
import { AppUser } from '../../shared/models/app-user';
import { AuthService } from '../../shared/services/authentication/auth.service';
import { ShoppingCartService } from '../../shared/services/database/shopping-cart.service';
import { ShoppingCart } from '../../shared/models/shopping-cart';
import { Observable } from 'rxjs';

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
    private shopingCartService: ShoppingCartService
  ) {}

  async ngOnInit() {
    this.auth.appUser$.subscribe((appUser) => (this.appUser = appUser!));
    this.cart$ = await this.shopingCartService.getCart();
  }

  logout() {
    this.auth.logout();
    
  }
}
