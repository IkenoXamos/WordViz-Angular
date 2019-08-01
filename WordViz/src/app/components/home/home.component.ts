import { Component, OnInit } from '@angular/core';

import { ChapterService } from 'src/app/services/chapter.service'
import { Chapter } from 'src/app/models/chapter';
import { SearchPipe } from 'src/app/pipes/SearchPipe';
import { Router } from '@angular/router';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  chapters: Chapter[];
  chapters2: Chapter[];
  searchText: string;
  recent: boolean;

  length:number;
  mod:number;
  max:number;
  min:number;
  dex:number;

  constructor(
    private cs: ChapterService,
    private SearchPipe:SearchPipe,
    private router: Router,
    private ss: StateService) { }

  ngOnInit() {
    this.max = 10
    this.min = 0
    this.dex = 1

    //get all chapters
    this.cs.getAll().subscribe(
      data =>{
        //sort by chapterId
        this.chapters = data.sort(function(a, b) {return b.chapterId - a.chapterId })
        this.length = data.length;
        this.mod = this.length%10;
      }
    )
  }

  nextPage(){
    this.min += 10;
    this.max += 10;
    this.dex += 10;
  }
  lastPage(){
    this.min -= 10;
    this.max -= 10;
    this.dex -= 10;
  }

  reset(){
    this.max=10;
    this.min=0;
    this.dex=1;

    this.chapters2 = this.SearchPipe.transform(this.chapters,this.searchText);
    this.length = this.chapters2.length;
    this.mod = this.length%10;
  }

  display(chapter: Chapter) {
    this.ss.data = chapter;
    this.router.navigate(['editChapter']);
  }
}
