import { Component, OnInit } from '@angular/core';
import { Chapter } from 'src/app/models/chapter';
import { StoryService } from 'src/app/services/story.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-chapter-title',
  templateUrl: './new-chapter-title.component.html',
  styleUrls: ['./new-chapter-title.component.css']
})
export class NewChapterTitleComponent implements OnInit {

  chapterTitle:string = '';
  newChapter:Chapter;

  constructor(private storyService: StoryService,private router:Router) { }

  ngOnInit() {
  }

  createChapter(){
    this.newChapter = new Chapter(null,this.storyService.currStory,this.chapterTitle,null,null);
    this.storyService.createChapter(this.newChapter).subscribe(
      data => {
        if(data!=null){
          this.router.navigateByUrl('/viewStoryChapters');
        }
      }
    );

  }

}
