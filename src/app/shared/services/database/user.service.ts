import {
  AngularFireDatabase,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { Injectable } from '@angular/core';
import { User, UserInfo } from 'firebase/auth';
import { AppUser } from '../../models/app-user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private db: AngularFireDatabase) {}

  save(user: UserInfo) {
    this.db.object(`/users/${user.uid}`).update({
      name: user.displayName,
      email: user.email,
    });
  }

  get(uid: string): AngularFireObject<AppUser> {
    return this.db.object(`/users/${uid}`);
  }
}
