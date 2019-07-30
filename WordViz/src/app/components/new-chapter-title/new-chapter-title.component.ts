import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-chapter-title',
  templateUrl: './new-chapter-title.component.html',
  styleUrls: ['./new-chapter-title.component.css']
})
export class NewChapterTitleComponent implements OnInit {

  chapterTitle:string = '';

  constructor() { }

  ngOnInit() {
  }

}
