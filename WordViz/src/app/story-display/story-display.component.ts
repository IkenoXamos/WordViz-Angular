import { Component, OnInit } from '@angular/core';
// import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as ClassicEditor from 'src/assets/customEditor/ckeditor.js';
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/base64uploadadapter';
import { UploadAdapter } from 'src/app/models/UploadAdapter';
import { HttpParams, HttpClient ,HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Chapter } from '../models/chapter';


@Component({
  selector: 'app-story-display',
  templateUrl: './story-display.component.html',
  styleUrls: ['./story-display.component.css']
})
export class StoryDisplayComponent implements OnInit {

    storyTitle:string = '';
    disableText = true;
    isDisabled = true;
    isLoggedIn = false;
    model = { extraPlugins: { extraPlugins: [ Base64UploadAdapter ] }
            };
    Editor = ClassicEditor;
    chapter: Chapter;

  constructor(private http:HttpClient, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.chapter = JSON.parse(params['chapter']);
      console.log(this.chapter);
    });
   }

  ngOnInit() {
  }

  //need to add this to an actual service this is basically dummy data
  saveChp():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    };////////////////////////////////////////////////////////////////////////////
    return this.http.post<any>("http://52.14.42.38:8085/WordViz/chapter/update", 
  {
    "chapterId":this.chapter.chapterId,
    "story": this.chapter.story,
    "name":this.chapter.name,
    "content":this.chapter.content,
    "timestamp":this.chapter.timestamp
  }, httpOptions);
  }

  getDatas():void{
    console.log(this.chapter.content);
    this.saveChp().subscribe(
      data => {console.log(data)}
    );
  }

  // onReady(eventData) {
  //   //still need to work on image upload
  //   eventData.plugins.get('FileRepository').createUploadAdapter = function (loader) {
  //     console.log(btoa(loader.file));
  //     return new UploadAdapter(loader);
  //   };
  // }

  public onReady( editor ) {
    editor.ui.getEditableElement().parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
    );

    // editor.plugins.get('FileRepository').createUploadAdapter = function (loader) {
    //   console.log(btoa(loader.file));
    //   return new UploadAdapter(loader);
    // };
  }
}
