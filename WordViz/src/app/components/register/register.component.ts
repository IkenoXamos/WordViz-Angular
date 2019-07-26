import { Component, OnInit } from '@angular/core';
import { UserService} from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private us: UserService) { }

  Username = "";
  Password = "";
  DisplayName = "";

  ngOnInit() {
  }
  
  onSubmit(Username,Password,DisplayName) {
    //hash the password and username here
    
    let hash = this.us.hashString(Password);

    this.us.register(Username, hash, DisplayName);
  }

}
