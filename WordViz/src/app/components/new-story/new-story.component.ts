import { Component, OnInit } from '@angular/core';
import { Story } from 'src/app/models/story';
import { AuthService } from 'src/app/services/auth.service';
import { StoryService } from 'src/app/services/story.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-story',
  templateUrl: './new-story.component.html',
  styleUrls: ['./new-story.component.css']
})
export class NewStoryComponent implements OnInit {
  storyTitle:string= '';
  story:Story;

  constructor(private auth: AuthService,private storyService: StoryService,
    private router:Router) { }

  ngOnInit() {
  }

  createStory(){
    this.story = new Story(null, this.auth.currentUser,this.storyTitle,null,1,0);
    this.storyService.createStory(this.story).subscribe(
      data =>{
        if(data!=null){
          this.router.navigateByUrl('/userStoriesBlogs');
        }
        else{
          console.log("error creating new story")
        }//add an error handler
      }
    );


  }

}
