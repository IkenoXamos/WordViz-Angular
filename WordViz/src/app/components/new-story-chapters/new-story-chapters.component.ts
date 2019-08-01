import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { StoryService } from 'src/app/services/story.service';
import { Router } from '@angular/router';
import { Story } from 'src/app/models/story';
import { Chapter } from 'src/app/models/chapter';
import { StateService } from 'src/app/services/state.service';
import { Tag } from 'src/app/models/tag';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-new-story-chapters',
  templateUrl: './new-story-chapters.component.html',
  styleUrls: ['./new-story-chapters.component.css']
})
export class NewStoryChaptersComponent implements OnInit {

  low:number = 0;
  high:number = 10;
  isDisabledPrev2:boolean = true; 
  isDisabledNext2:boolean = false;

  story:Story;
  story2:Story;
  chapters:Chapter[];
  
  alltags:Tag[];
  tags2:Tag[] = [];
  length:number;

  edit:boolean = false;

  options:Array<{tag:Tag, checked:boolean}> = [];


  constructor(private auth: AuthService,private storyService: StoryService,
    private router:Router, private stateService: StateService, private tagService: TagService,
    private ss:StateService) {

    this.story = this.ss.data;
    this.ss.data = undefined;
    this.userCurrAuth();
    this.storyService.getStoryChapters(this.story).subscribe(
      data =>{
        if(data!=null){
          this.chapters = data;
          if(this.chapters.length <= this.high){
            this.isDisabledNext2 = true;
          }
  
        }
        else{
          console.log(data);
        }
      }
    );

    this.tagService.getStoryTags().subscribe(
      data =>{
        this.alltags = data.sort(function(a, b) {return b.tagId - a.tagId });
        this.length = this.alltags.length/2

        let tag:Tag;
        let tag2:Tag;
        for ( tag of this.alltags){
          let include:boolean = false;
          for (tag2 of this.story.tags){
            if(tag2.name === tag.name ){
            include = true;
          }
        }
          if(include){
           this.options.push({tag:tag, checked:true}) 
          }else{
           this.options.push({tag:tag, checked:false})
          }
        
      }

        console.log(this.options)
      });
  }

  ngOnInit() {}

  userCurrAuth(){

    if(this.auth.currentUser.userId != this.story.author.userId){
      this.router.navigate(['home'])
    }else{
      return true;
    }
  }

  createChapter(){
    this.stateService.data = this.storyService.currStory;
    this.router.navigate(['/newChapterTitle']);

  }

  editChapter(index: number){
    this.stateService.data = this.chapters[index];
    this.router.navigate(['/editChapter']);
  }

  editStory(){
    this.tags();
    this.story.tags = this.tags2;
    this.storyService.setCurrStory(this.story);
    this.storyService.updateStory(this.story).subscribe(
      data =>{
        if(data!=null){
          // this.router.navigateByUrl('/viewStoryChapters');
          // window.location.reload();
          window.alert("Story Saved");
        }
        else{
          console.log("error creating new story")
        }//add an error handler
      },error => {
        console.log(error);
      });
  }

  tags(){
    for (let option of this.options){
      if (option.checked){
        this.tags2.push(option.tag);
      }
    }
    console.log(this.tags2)
  }

  previous2(){
    if(this.low <= 0){
      this.isDisabledPrev2 = true;
    }
    else{
      this.low = this.low - 10;
      this.high = this.high - 10;
      this.isDisabledPrev2 = false;
      this.isDisabledNext2 = false;
      if(this.low <= 0){
        this.low = 0;
        this.high = 10;
        this.isDisabledPrev2 = true;
        this.isDisabledNext2 = false;
      }
    }
  }

  next2(){
    
      this.low = this.low + 10;
      this.high = this.high + 10;
      this.isDisabledNext2 = false;
      this.isDisabledPrev2 = false;
      if(this.high + 10 >= this.chapters.length){
        this.isDisabledNext2 = true;
        this.isDisabledPrev2 = false;
      }
    
  }

}
