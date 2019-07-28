import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";

import { StoryService } from 'src/app/services/story.service'
import { Story } from 'src/app/models/story';

import { ChapterService } from 'src/app/services/chapter.service'
import { Chapter } from 'src/app/models/chapter';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //stories: Story[]=[];
  chapters: Chapter[];
  constructor(
    private story: StoryService,
    private chapter: ChapterService) { }

  ngOnInit() {
    //get all stories
    // this.story.getAll().subscribe(
    //   data =>{
    //     this.stories = data
    //     console.log(this.stories);
    //   }
    // )

    //get all chapters
    this.chapter.getAll().subscribe(
      data =>{
        this.chapters = data
        console.log(this.chapters);
      }
    )
  }



}
