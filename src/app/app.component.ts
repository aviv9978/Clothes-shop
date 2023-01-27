import { UserService } from './shared/services/database/user.service';
import { AuthService } from './shared/services/authentication/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private auth: AuthService,
    private router: Router,
    private userService: UserService
  ) {
    auth.user$.subscribe((user) => {
      if (!user) return;

      userService.save(user);

      let returnUrl = localStorage.getItem('returnUrl') as string;
      if (!returnUrl) return;

      localStorage.removeItem('returnUrl');
      router.navigateByUrl(returnUrl);
    });
  }
}
