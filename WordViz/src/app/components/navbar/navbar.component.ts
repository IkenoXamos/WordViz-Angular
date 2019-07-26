import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { SessionStorage} from 'ngx-webstorage';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 
  @SessionStorage()
  currentUser: User;

  constructor(
    private as: AuthService,
    private us: UserService) { }

    loggedIn: boolean = (this.as.currentUser != null);


  ngOnInit() {
    this.as.viewUser().subscribe( user => {
      this.loggedIn = (this.as.currentUser != null);
    })
  }

  logout() {
      this.us.logout();
  }

}
