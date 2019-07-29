import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CKEditorModule, CKEditorComponent} from '@ckeditor/ckeditor5-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserStoriesBLogsComponent } from './user-stories-blogs/user-stories-blogs.component';
import { StoryDisplayComponent } from './story-display/story-display.component';
import { BlogDisplayComponent } from './blog-display/blog-display.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


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
    UserStoriesBLogsComponent,
    StoryDisplayComponent,
    BlogDisplayComponent,
    // CKEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CKEditorModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
