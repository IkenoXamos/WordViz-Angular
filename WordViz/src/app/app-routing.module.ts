import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserStoriesBLogsComponent } from './user-stories-blogs/user-stories-blogs.component';
import { StoryDisplayComponent } from './story-display/story-display.component';
import { NewStoryComponent } from './components/new-story/new-story.component';
import { NewStoryChaptersComponent } from './components/new-story-chapters/new-story-chapters.component';
import { NewChapterTitleComponent } from './components/new-chapter-title/new-chapter-title.component';


const routes: Routes = [

  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'newStory',
    component: StoryDisplayComponent
  },
  {
    path:'createStoryTitle',
    component: NewStoryComponent
  },
  {
    path: 'viewStoryChapters',
    component: NewStoryChaptersComponent
  },
  {
    path: 'newChapterTitle',
    component: NewChapterTitleComponent
  },
  {
    path:'editChapter',
    component: StoryDisplayComponent
  },
  {
    path:'userStoriesBlogs',
    component: UserStoriesBLogsComponent
  },
  {
    path:'**', //rediect anywhere not listed above
    redirectTo: 'home',
    pathMatch: 'full'
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
