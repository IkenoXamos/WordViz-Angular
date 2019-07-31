import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { StoryService } from 'src/app/services/story.service';
import { Router } from '@angular/router';
import { Story } from 'src/app/models/story';
import { Chapter } from 'src/app/models/chapter';

@Component({
  selector: 'app-new-story-chapters',
  templateUrl: './new-story-chapters.component.html',
  styleUrls: ['./new-story-chapters.component.css']
})
export class NewStoryChaptersComponent implements OnInit {

  story:Story;
  chapters:Chapter[];
  constructor(private auth: AuthService,private storyService: StoryService,
    private router:Router) { }

  ngOnInit() {
    this.userCurrAuth();
    this.storyService.getStoryChapters(this.story).subscribe(
      data =>{
        if(data!=null){
          this.chapters = data;
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
    this.router.navigate(['/newChapterTitle', { story: JSON.stringify(this.storyService.currStory) }]);
  }

  editChapter(index: number){
    this.router.navigate(['/editChapter', { chapter: JSON.stringify(this.chapters[index]) }]);
  }
}
