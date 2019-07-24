import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserStoriesBLogsComponent } from './user-stories-blogs/user-stories-blogs.component';

@NgModule({
  declarations: [
    AppComponent,
    UserStoriesBLogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
