import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { SessionStorage, SessionStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';


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

  viewUser(): Observable<any> {
    return this.ss.observe("currentUser");
  }

  remove(): void {
    this.currentUser = null;
  }
}
