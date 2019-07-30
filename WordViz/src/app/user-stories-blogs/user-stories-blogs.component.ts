import { Component, OnInit } from '@angular/core';
import { StoryService } from '../services/story.service';
import { SessionStorage, SessionStorageService } from 'ngx-webstorage';
import {User} from '../models/user';
import {Story} from '../models/story';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-stories-blogs',
  templateUrl: './user-stories-blogs.component.html',
  styleUrls: ['./user-stories-blogs.component.css']
})
export class UserStoriesBLogsComponent implements OnInit {
  number:number= 1;
  active:boolean = true;
  stories:Story[];
  @SessionStorage()
  currentUser: User;

  @SessionStorage()
  currStory: Story;

  constructor(private storyService: StoryService,private router: Router) { }

  ngOnInit() {
    this.getUserStories();
  }

  routeCreateStory(){
    //go to page for creating the title name of the story
    this.router.navigate(['createStoryTitle']);
  }

  getUserStories(){
    //returns the current user's stories
    this.storyService.getStoriesByAuthor(this.currentUser).subscribe(
      data =>{
        if(data != null){
          this.stories = data;
          console.log(data);
        }
        else{
          console.log('error geting stories');
        }
      }
    );
  }

  isStory(story:Story){
    if(story.type == 1){//story == 1
      return true;
    }
    else{
      return false;
    }
  }

  setCurrStory(story:Story){
    this.storyService.setCurrStory(story);
    //continue here
  }

}
