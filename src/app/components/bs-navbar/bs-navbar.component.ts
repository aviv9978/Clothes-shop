import { Component, OnInit } from '@angular/core';
import { AppUser } from '../../shared/models/app-user';
import { AuthService } from '../../shared/services/authentication/auth.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css'],
})
export class BsNavbarComponent implements OnInit {
  appUser!: AppUser;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.appUser$.subscribe((appUser) => (this.appUser = appUser!));
  }

  logout() {
    this.auth.logout();
  }
}
