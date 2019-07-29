import { Component, OnInit } from '@angular/core';

import { ChapterService } from 'src/app/services/chapter.service'
import { Chapter } from 'src/app/models/chapter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  chapters: Chapter[];
  searchText: string;
  search: boolean;

  constructor(
    private chapter: ChapterService) { }

  ngOnInit() {
    //get all chapters
    this.chapter.getAll().subscribe(
      data =>{
        //sort by chapterId
        this.chapters = data.sort(function(a, b) {return b.chapterId - a.chapterId })
        console.log(this.chapters);
      }
    )
  }

  searchChange(){
    if(this.searchText != ''){
      this.search = false;
    }else{
      this.search = true;
    }

  }


}
