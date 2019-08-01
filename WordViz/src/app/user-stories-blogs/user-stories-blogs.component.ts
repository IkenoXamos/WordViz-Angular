import { Component, OnInit } from '@angular/core';
import { StoryService } from '../services/story.service';
import { SessionStorage, SessionStorageService } from 'ngx-webstorage';
import {User} from '../models/user';
import {Story} from '../models/story';
import { Router } from '@angular/router';
import { Chapter } from '../models/chapter';
import { identifierModuleUrl } from '@angular/compiler';


@Component({
  selector: 'app-user-stories-blogs',
  templateUrl: './user-stories-blogs.component.html',
  styleUrls: ['./user-stories-blogs.component.css']
})
export class UserStoriesBLogsComponent implements OnInit {
  number:number= 1;
  active:boolean = true;
  allStories:Story[];
  blogs:Story[];
  stories:Story[];
  numberOfPages:number;
  // numbersArray:number[];//holds number of pages for pagination
  lowStories:number = 0;
  highStories:number = 10;
  lowBlogs:number = 0;
  highBlogs:number = 10;
  numberOfStories = 0;
  numberOfBlogs = 0;
  isDisabledPrev:boolean = true; 
  isDisabledNext:boolean = false; 
  isDisabledPrev2:boolean = true; 
  isDisabledNext2:boolean = false; 
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

  routeCreateBlog(){
    this.router.navigateByUrl('/createBlogTitle');
  }

  getUserStories(){
    //returns the current user's stories
    this.storyService.getStoriesByAuthor(this.currentUser).subscribe(
      data =>{
        if(data != null){
          this.allStories = data.sort(function(a, b) {return b.storyId - a.storyId });
          for(let i = 0;i < this.allStories.length;i++){
            if(this.allStories[i].type == 1){
              this.numberOfStories++;
            }
            else{
              this.numberOfBlogs++;
            }
          }
          this.seperateStoriesBlogs();
          console.log(data);
        }
        else{
          console.log('error geting stories');
        }
      }
    );
  }

  seperateStoriesBlogs(){
    //seperates the stories and blogs to be able to display them in user-stories-blogs
    this.stories = new Array(this.numberOfStories);
    this.blogs = new Array(this.numberOfBlogs);
    let indexStory = 0;
    let indexBlogs = 0;
    for(let i = 0; i<this.allStories.length;i++){
      if(this.allStories[i].type == 1){
        this.stories[indexStory] = this.allStories[i];
        indexStory++;
      }
      else{
        this.blogs[indexBlogs] = this.allStories[i];
        indexBlogs++;
      }
    }
    console.log(this.blogs);
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
          this.router.navigateByUrl('/viewBlogPosts');
          console.log(this.chapters);
        }
        else{
          console.log("couldn't get the chapters");
        }
      }
    );
    //continue here
  }


  previous(){
    //go to previous page in stories
    if(this.lowStories == 0){
      this.isDisabledPrev = true;
    }
    else{
      this.lowStories = this.lowStories - 10;
      this.highStories = this.highStories - 10;
      this.isDisabledPrev = false;
      this.isDisabledNext = false;
      if(this.lowStories <= 0){
        this.lowStories = 0;
        this.highStories = 10;
        this.isDisabledPrev = true;
      }
    }
  }

  next(){
    //go to next page in stories
    
    
      this.lowStories = this.lowStories + 10;
      this.highStories = this.highStories + 10;
      this.isDisabledNext = false;
      this.isDisabledPrev = false;

      if(this.highStories + 10 > this.numberOfStories){
        this.isDisabledNext = true;
        this.isDisabledPrev = false;
      }
    
  }

  previous2(){
    if(this.lowBlogs == 0){
      this.isDisabledPrev = true;
    }
    else{
      this.lowBlogs = this.lowBlogs - 10;
      this.highBlogs = this.highBlogs - 10;
      this.isDisabledPrev = false;
      if(this.lowBlogs <= 0){
        this.lowBlogs = 0;
        this.highBlogs = 9;
        this.isDisabledPrev2 = true;
      }
    }
  }

  next2(){
    if(this.highBlogs + 10 > this.stories.length){
      this.isDisabledPrev2 = true;
    }
    else{
      this.lowBlogs = this.lowBlogs + 10;
      this.highBlogs = this.highBlogs + 10;
      this.isDisabledNext2 = false;
      if(this.highBlogs + 10 > this.stories.length){
        this.isDisabledPrev2 = true;
      }
    }
  }
  
}
