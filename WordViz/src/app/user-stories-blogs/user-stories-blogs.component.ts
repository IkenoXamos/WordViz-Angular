import { Component, OnInit } from '@angular/core';
import { StoryService } from '../services/story.service';
import { SessionStorage, SessionStorageService } from 'ngx-webstorage';
import {User} from '../models/user';
import {Story} from '../models/story';
import { Router } from '@angular/router';
import { Chapter } from '../models/chapter';

@Component({
  selector: 'app-user-stories-blogs',
  templateUrl: './user-stories-blogs.component.html',
  styleUrls: ['./user-stories-blogs.component.css']
})
export class UserStoriesBLogsComponent implements OnInit {
  number:number= 1;
  active:boolean = true;
  stories:Story[];
  // chapters: Chapter[];
  @SessionStorage()
  currentUser: User;

  @SessionStorage()
  chapters: Chapter[];

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
    //set the current user story clicked on and go to edit chapters
    this.storyService.setCurrStory(story);
    this.storyService.getStoryChapters(story).subscribe(
      data => {
        if(data!=null){
          this.chapters = data;
          this.router.navigateByUrl('/viewStoryChapters');
          console.log(this.chapters);
        }
        else{
          console.log("couldn't get the chapters");
        }
      }
    );
    //continue here
  }

}
