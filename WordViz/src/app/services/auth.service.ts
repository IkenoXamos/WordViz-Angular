import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { SessionStorage, SessionStorageService } from 'ngx-webstorage';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @SessionStorage()
  currentUser: User;

  constructor(private ss: SessionStorageService) { }

  setUser(user: User): void {
    this.currentUser = (user != null) ? user : this.currentUser;
  }
}
