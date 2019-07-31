import { Component, OnInit } from '@angular/core';
import { ChapterService } from 'src/app/services/chapter.service';
import { Chapter } from 'src/app/models/chapter';
import { ActivatedRoute } from '@angular/router';
import { Story } from 'src/app/models/story';

@Component({
  selector: 'app-new-chapter-title',
  templateUrl: './new-chapter-title.component.html',
  styleUrls: ['./new-chapter-title.component.css']
})
export class NewChapterTitleComponent implements OnInit {



  chapterTitle:string = '';
  story: Story;

  constructor(private cs: ChapterService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.story = params['story'];
      console.log(this.story.storyId);
   });
  }

  createChapter(){
    this.cs.createChapter(new Chapter(null, null, this.chapterTitle, "", null));
  }

}
