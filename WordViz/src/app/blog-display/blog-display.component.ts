import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';




@Component({
  selector: 'app-blog-display',
  templateUrl: './blog-display.component.html',
  styleUrls: ['./blog-display.component.css']
})
export class BlogDisplayComponent implements OnInit {

  disableText = true;
  public isDisabled = true;
  public isLoggedIn = true;
  public model = {
    editorData: '<p>Hello, world! </p>'
};
  public Editor = ClassicEditor;

  constructor() { }

  ngOnInit() {
  }

  

}
