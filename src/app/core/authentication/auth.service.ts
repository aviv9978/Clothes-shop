import { GoogleAuthProvider, User, UserInfo } from 'firebase/auth';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, of, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AppUser } from '../../shared/models/app-user';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<UserInfo | null>;

  constructor(afAuth: AngularFireAuth, private userService: UserService) {
    this.user$ = afAuth.authState;
  }

  get appUser$(): Observable<AppUser | null> {
    return this.user$.pipe(
      switchMap((user) => {
        if (user) return this.userService.get(user!.uid).valueChanges();
        return of(null);
      })
    );
  }
}
