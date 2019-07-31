import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { StoryService } from 'src/app/services/story.service';
import { Router } from '@angular/router';
import { Story } from 'src/app/models/story';

@Component({
  selector: 'app-new-story-chapters',
  templateUrl: './new-story-chapters.component.html',
  styleUrls: ['./new-story-chapters.component.css']
})
export class NewStoryChaptersComponent implements OnInit {

  story:Story;
  constructor(private auth: AuthService,private storyService: StoryService,
    private router:Router) { }

  ngOnInit() {
    this.userCurrAuth();
  }

  userCurrAuth(){
    if(this.auth.currentUser.userId == this.storyService.currStory.author.userId){
      this.story = this.storyService.currStory;
      return true;

      //////////////con here
    }
    else{
      return false;
    }
  }

  createChapter(){
    this.router.navigateByUrl('/newChapterTitle');
  }

  editChapter(){
    this.router.navigateByUrl('/editChapter');
  }
}
