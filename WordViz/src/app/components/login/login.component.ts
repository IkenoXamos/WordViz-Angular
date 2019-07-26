import { Component, OnInit } from '@angular/core';
import { UserService} from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private us: UserService) { }

  Username = "";
  Password = "";

  ngOnInit() {
  }

  onSubmit(Username,Password) {
    //hash the password and username here
        
    let hash = this.us.hashString(Password);

    this.us.login(Username, hash);
  }



}
