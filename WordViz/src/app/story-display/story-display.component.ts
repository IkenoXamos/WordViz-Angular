import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import {ClassicEditor} from '@ckeditor/ckeditor5-build-classic';
// import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/base64uploadadapter';
import {UploadAdapter} from 'src/app/models/UploadAdapter';
// import { from } from 'rxjs';
import { HttpParams, HttpClient ,HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Component({
  selector: 'app-story-display',
  templateUrl: './story-display.component.html',
  styleUrls: ['./story-display.component.css']
})
export class StoryDisplayComponent implements OnInit {

    //npm install --save @ckeditor/ckeditor5-upload
    disableText = true;
  public isDisabled = true;
  public isLoggedIn = false;
  public model = {
    editorData: ''
};
public Editor = ClassicEditor;

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  saveChp():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    };////////////////////////////////////////////////////////////////////////////
    return this.http.post<any>("http://52.14.42.38:8085/WordViz/chapter/update", {
      



  "chapterId":null,

  "story": {

      "storyId":30,

      "author":{

          "userId":1,

          "username":"username",

          "password":12345,

          "displayName":"displayName"

      },

      "name":"Example Story",

      "tags":[],

      "type":1,

      "vote":0

  },

  "name":"Example Chapter 2",

  "content":this.model.editorData,

  "timestamp":null




    },httpOptions);
  }

  getDatas():void{
    console.log(this.model.editorData);
    this.saveChp().subscribe(
      data => {console.log(data)}
    );
  }

  onReady(eventData) {
    eventData.plugins.get('FileRepository').createUploadAdapter = function (loader) {
      console.log(btoa(loader.file));
      return new UploadAdapter(loader);
    };
  }


}
