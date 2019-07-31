import { Injectable } from '@angular/core';
import { Tag } from '../models/tag';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http:HttpClient) { }

  getStoryTags():Observable<Tag[]>{
    return this.http.get<Tag[]>(
      "http://52.14.42.38:8085/WordViz/tag/story"
      );
  }

  getBlogTags():Observable<Tag[]>{
    return this.http.get<Tag[]>(
      "http://52.14.42.38:8085/WordViz/tag/blog"
      );
  }

}

