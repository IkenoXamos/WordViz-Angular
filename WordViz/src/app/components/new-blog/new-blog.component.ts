import { Component, OnInit } from '@angular/core';
import { Story } from 'src/app/models/story';
import { AuthService } from 'src/app/services/auth.service';
import { StoryService } from 'src/app/services/story.service';
import { Router } from '@angular/router';
import { TagService } from 'src/app/services/tag.service';
import { Tag } from 'src/app/models/tag';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.css']
})
export class NewBlogComponent implements OnInit {
  storyTitle:string= '';
  story:Story;

  alltags:Tag[];
  tags2:Tag[] = [];
  length:number;

  options:Array<{tag:Tag, checked:boolean}> = [];

  constructor(private auth: AuthService,private storyService: StoryService,
    private router:Router, private tagService: TagService, private ss: StateService) { }

  ngOnInit() {
    this.tagService.getBlogTags().subscribe(
      data =>{
        this.alltags = data.sort(function(a, b) {return b.tagId - a.tagId });
        this.length = this.alltags.length/2

        let tag:Tag
        for ( tag of this.alltags){
          this.options.push({tag:tag, checked:false})
        }
      });
  }

  createStory(){

    this.tags();

    this.story = new Story(null, this.auth.currentUser,this.storyTitle,this.tags2,2,0);
    this.storyService.createStory(this.story).subscribe(
      data =>{
        if(data!=null){
          this.ss.data=data;
          this.router.navigate(['viewBlogPosts']);
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
