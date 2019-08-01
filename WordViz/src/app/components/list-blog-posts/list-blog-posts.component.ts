import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { StoryService } from 'src/app/services/story.service';
import { Router } from '@angular/router';
import { Story } from 'src/app/models/story';
import { Chapter } from 'src/app/models/chapter';
import { StateService } from 'src/app/services/state.service';
import { Tag } from 'src/app/models/tag';
import { TagService } from 'src/app/services/tag.service'

@Component({
  selector: 'app-list-blog-posts',
  templateUrl: './list-blog-posts.component.html',
  styleUrls: ['./list-blog-posts.component.css']
})
export class ListBlogPostsComponent implements OnInit {

  story:Story;
  chapters:Chapter[];
  
  alltags:Tag[];
  tags2:Tag[] = [];
  length:number;
  edit:boolean = false;

  options:Array<{tag:Tag, checked:boolean}> = [];

  isDisabledPrev:boolean = true; 
  isDisabledNext:boolean = false; 
  low:number = 0;
  high:number = 10;



  constructor(private auth: AuthService,private storyService: StoryService,
    private router:Router, private tagService: TagService, private ss: StateService) { 
      


    this.story = this.ss.data;
    this.ss.data = undefined;
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

    
    this.tagService.getBlogTags().subscribe(
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
      });
  }

  ngOnInit() {}

  userCurrAuth(){
    if(this.auth.currentUser.userId != this.story.author.userId){
      this.router.navigate(['home']);
    }else{
      return true;
    }
  }

  createChapter(){
    this.ss.data = this.story;
    this.router.navigate(['/newChapterTitle']);
  }

  editChapter(index: number){
    this.ss.data = this.chapters[index];
    this.router.navigate(['/editChapter']);
  }
  
  editBlog(){
    this.tags();
    this.story.tags = this.tags2;
    this.storyService.updateStory(this.story).subscribe(
      data =>{
        if(data!=null){
          // this.router.navigateByUrl('/viewStoryChapters');
          // window.location.reload();
          window.alert("Blog Saved");
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
