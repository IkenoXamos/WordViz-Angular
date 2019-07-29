import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserStoriesBLogsComponent } from './user-stories-blogs/user-stories-blogs.component';


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
