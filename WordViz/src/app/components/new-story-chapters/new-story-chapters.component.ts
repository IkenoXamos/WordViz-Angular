import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-new-story-chapters',
  templateUrl: './new-story-chapters.component.html',
  styleUrls: ['./new-story-chapters.component.css']
})
export class NewStoryChaptersComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  userCurrAuth(){
    
  }

}
