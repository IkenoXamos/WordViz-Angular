import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-stories-blogs',
  templateUrl: './user-stories-blogs.component.html',
  styleUrls: ['./user-stories-blogs.component.css']
})
export class UserStoriesBLogsComponent implements OnInit {
  number:number= 1;
  active:boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
