import { Injectable } from '@angular/core';
import { Story } from '../models/story'
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Story[]>{
    return this.http.get<Story[]>(
      "http://52.14.42.38:8085/WordViz/story/all"
      );
  }
}
