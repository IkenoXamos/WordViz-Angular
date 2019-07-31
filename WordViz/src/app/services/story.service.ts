import { Injectable } from '@angular/core';
import { Story } from '../models/story'
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AuthService } from './auth.service';
import { SessionStorage } from 'ngx-webstorage';
import { Chapter } from '../models/chapter';




@Injectable({
  providedIn: 'root'
})


export class StoryService {

  @SessionStorage()
  currStory:Story;

  @SessionStorage()
  chapters: Chapter[];

  constructor(private http:HttpClient,private auth:AuthService) { }

  getAll():Observable<Story[]>{
    return this.http.get<Story[]>(
      "http://52.14.42.38:8085/WordViz/story/all"
      );
  }

  getStoriesByAuthor(user:User):Observable<Story[]>{
    return this.http.post<Story[]>(
      "http://52.14.42.38:8085/WordViz/story/user",
      user,
      {headers: new HttpHeaders({'Content-Type': 'application/json'})}
    );
  }

  createStory(story: Story):Observable<Story>{
    return this.http.post<Story>(
      "http://52.14.42.38:8085/WordViz/story/new",
      {
        "storyId":null,
        "author":this.auth.getUser(),
        "name":story.name,
        "tags":story.tags,
        "type": story.type,
        "vote": story.vote
      }
    );
  }

  setCurrStory(story: Story){
    this.currStory = story;
  }

  getStoryChapters(story:Story):Observable<Chapter[]>{
    return this.http.post<Chapter[]>(
      "http://52.14.42.38:8085/WordViz/story/chapters",
      story
    );
  }

  createChapter(){
    
  }

}
