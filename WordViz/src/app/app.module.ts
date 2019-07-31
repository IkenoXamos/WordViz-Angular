import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HtmlPipe } from './pipes/HtmlPipe';
import { StoryDisplayComponent } from './story-display/story-display.component';
import { UserStoriesBLogsComponent } from './user-stories-blogs/user-stories-blogs.component';
import { BlogDisplayComponent } from './blog-display/blog-display.component';
import { SearchPipe } from './pipes/SearchPipe';
import { SpacePipe } from './pipes/SpacePipe'
import { NewStoryComponent } from './components/new-story/new-story.component';
import { NewStoryChaptersComponent } from './components/new-story-chapters/new-story-chapters.component';
import { DictionaryComponent } from './components/dictionary/dictionary.component';
import { NewChapterTitleComponent } from './components/new-chapter-title/new-chapter-title.component';


//run 'npm install --save ngx-webstorage' in the terminal to install the NgxStorageModule


//note installed text editor using "npm install --save @ckeditor/ckeditor5-angular"
//followed by "npm install --save @ckeditor/ckeditor5-build-classic"
//then just use the import and add to imports
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HtmlPipe,
    StoryDisplayComponent,
    UserStoriesBLogsComponent,
    BlogDisplayComponent,
    SearchPipe,
    SpacePipe,
    NewStoryComponent,
    NewStoryChaptersComponent,
    DictionaryComponent,
    NewChapterTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxWebstorageModule.forRoot(),
    HttpClientModule,
    CKEditorModule,
    
  ],
  providers: [ 
    HtmlPipe,
    SearchPipe,
    SpacePipe 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
