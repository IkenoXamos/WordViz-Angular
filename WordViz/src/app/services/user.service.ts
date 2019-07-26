import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from '../models/user';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http:HttpClient,
    private router: Router,
    private auth: AuthService) { }

  // TypeScript Equivalent of Java's String.hashcode()
  hashString(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash += Math.pow(str.charCodeAt(i) * 31, str.length - i);
      hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
  }

  loginRequest(Username:string, hash:number):Observable<any>{
    let parameters = {"username":Username,"password":hash}
    return this.http.post<User>(
      "http://52.14.42.38:8085/WordViz/login", parameters, {headers: new HttpHeaders({'Content-Type': 'application/json'})}
      );
  }

  login(Username:string, hash:number) {

    this.loginRequest(Username, hash).subscribe((data:User) => {
      if(data != null) {
        //successful login
        console.log("logged in");
        this.auth.setUser(data);
        this.router.navigateByUrl('/home');

      }else{
        //unsuccessful login
        window.alert("Login attempt failed")
      }
    }, error => {
      console.log(error);
      window.alert("Login attempt failed")
    });
  }//---end of login---

  register(Username:string, hash:number, DisplayName:string){
    this.registerRequest(Username, hash, DisplayName).subscribe((response) => {
      if(response) {//if response is true
        this.login(Username, hash)
      }else{
        window.alert("Registering user failed")
      }
      }, error => {
        console.log(error);
        window.alert("Registering user failed")
    });
  }

  registerRequest(Username:string, hash:number, DisplayName:string){
    
    let newUser: User = new User(null,null,null,null);
    newUser.username = Username;
    newUser.password = hash;
    newUser.displayName = DisplayName;

    let parameters = newUser;

    return this.http.post<boolean>(
      "http:///52.14.42.38:8085/WordViz/register", parameters, {headers: new HttpHeaders({'Content-Type': 'application/json'})}
      );

  }
}




