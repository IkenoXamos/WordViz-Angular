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
    BlogDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxWebstorageModule.forRoot(),
    HttpClientModule,
    CKEditorModule,
    
  ],
  providers: [ HtmlPipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
