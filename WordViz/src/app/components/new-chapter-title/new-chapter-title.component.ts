import { Component, OnInit } from '@angular/core';
import { ChapterService } from 'src/app/services/chapter.service';
import { ActivatedRoute } from '@angular/router';
import { Story } from 'src/app/models/story';
import { Chapter } from 'src/app/models/chapter';
import { StoryService } from 'src/app/services/story.service';
import { Router } from '@angular/router';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-new-chapter-title',
  templateUrl: './new-chapter-title.component.html',
  styleUrls: ['./new-chapter-title.component.css']
})
export class NewChapterTitleComponent implements OnInit {

  chapterTitle:string = '';
  story: Story;
  newChapter:Chapter;

  constructor(private cs: ChapterService, private route: ActivatedRoute,
          private router:Router, private stateService: StateService) {
    this.story = this.stateService.data;
    this.stateService.data = undefined;
   }

  ngOnInit() {
  }

  createChapter(){
    this.newChapter = new Chapter(null,this.story,this.chapterTitle,null,null);
    console.log(this.newChapter);
    this.cs.createChapter(this.newChapter).subscribe(
      data => {
        if(data!=null){
          this.stateService.data = data;
          
          this.router.navigateByUrl('/editChapter');
          
          
        }
      }
    );
  }
}
