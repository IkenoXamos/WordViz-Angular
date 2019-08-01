import { Component, OnInit } from '@angular/core';
import * as CKEDITOR from 'src/assets/customEditor/ckeditor.js';
import { Chapter } from '../models/chapter';
import { StateService } from '../services/state.service';
import { AuthService } from '../services/auth.service';
import { ChapterService } from '../services/chapter.service';


@Component({
  selector: 'app-story-display',
  templateUrl: './story-display.component.html',
  styleUrls: ['./story-display.component.css']
})
export class StoryDisplayComponent implements OnInit {

    isLoggedIn: boolean = false;
    Editor = CKEDITOR.CustomEditor;
    EditorDisabled = CKEDITOR.DisplayEditor;
    chapter: Chapter;

  constructor(private cs: ChapterService, private stateService: StateService, private auth: AuthService) {
    this.chapter = this.stateService.data;
    this.stateService.data = undefined;
    this.isLoggedIn = (JSON.stringify(this.auth.currentUser) == JSON.stringify(this.chapter.story.author));
   }

  ngOnInit() {
  }

  onSubmit(): void{
    this.cs.createChapter(this.chapter).subscribe(
      data => {console.log(data)}
    );
  }
}
