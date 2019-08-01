import { Injectable } from '@angular/core';
import { Chapter } from '../models/chapter'
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Chapter[]>{
    return this.http.get<Chapter[]>(
      "http://52.14.42.38:8085/WordViz/chapter/all"
      );
  }

  createChapter(chapter: Chapter): Observable<Chapter> {
    return this.http.post<Chapter>("http://52.14.42.38:8085/WordViz/chapter/new", chapter);
  }

  updateChapter(chapter: Chapter): Observable<Chapter> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    };
    return this.http.post<any>("http://52.14.42.38:8085/WordViz/chapter/update", 
      chapter, httpOptions
    );
  }
}
