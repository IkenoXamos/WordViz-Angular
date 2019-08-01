import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { StoryService } from 'src/app/services/story.service';
import { Router } from '@angular/router';
import { Story } from 'src/app/models/story';
import { Chapter } from 'src/app/models/chapter';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-list-blog-posts',
  templateUrl: './list-blog-posts.component.html',
  styleUrls: ['./list-blog-posts.component.css']
})
export class ListBlogPostsComponent implements OnInit {

  story:Story;
  chapters:Chapter[];

  isDisabledPrev:boolean = true; 
  isDisabledNext:boolean = false; 
  low:number = 0;
  high:number = 10;

  constructor(private auth: AuthService,private storyService: StoryService,
    private router:Router, private stateService: StateService) { }

  ngOnInit() {
    this.userCurrAuth();
    this.storyService.getStoryChapters(this.story).subscribe(
      data =>{
        if(data!=null){
          this.chapters = data;
          if(this.chapters.length < this.high){
            this.isDisabledNext = true;
          }
          console.log(data);
        }
        else{
          console.log(data);
        }
      }
    );
  }

  userCurrAuth(){
    if(this.auth.currentUser.userId == this.storyService.currStory.author.userId){
      this.story = this.storyService.currStory;
      return true;

      //////////////con here
    } else{
      return false;
    }
  }

  createChapter(){
    this.router.navigate(['/newChapterTitle']);
    this.stateService.data = this.storyService.currStory;
  }

  editChapter(index: number){
    this.router.navigate(['/editChapter']);
    this.stateService.data = this.chapters[index];
  }


  previous(){
    if(this.low <= 0){
      this.isDisabledPrev = true;
    }
    else{
      this.low = this.low - 10;
      this.high = this.high - 10;
      this.isDisabledPrev = false;
      this.isDisabledNext = false;
      if(this.low <= 0){
        this.low = 0;
        this.high = 10;
        this.isDisabledPrev = true;
        this.isDisabledNext = false;
      }
    }
  }

  next(){
    
      this.low = this.low + 10;
      this.high = this.high + 10;
      this.isDisabledNext = false;
      this.isDisabledPrev = false;
      if(this.high + 10 >= this.chapters.length){
        this.isDisabledNext = true;
        this.isDisabledPrev = false;
      }
    
  }

}
