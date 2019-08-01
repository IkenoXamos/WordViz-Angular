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

  story:Story;
  storyTitle:string;
  chapters:Chapter[];
  
  alltags:Tag[];
  tags2:Tag[] = [];
  length:number;

  edit:boolean = false;

  options:Array<{tag:Tag, checked:boolean}> = [];


  constructor(private auth: AuthService,private storyService: StoryService,
    private router:Router, private stateService: StateService, private tagService: TagService) {

    this.userCurrAuth();
    this.storyService.getStoryChapters(this.story).subscribe(
      data =>{
        if(data!=null){
          this.chapters = data;
  
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

  editStory(){
    
    this.tags();

    this.story = new Story(this.story.storyId,this.story.author,this.storyTitle,this.tags2,this.story.type,this.story.vote);
    this.storyService.editStory(this.story).subscribe(
      data =>{
        if(data!=null){
          this.router.navigateByUrl('/viewStoryChapters');
        }
        else{
          console.log("error creating new story")
        }//add an error handler
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
}
