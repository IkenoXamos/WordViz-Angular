import { Injectable } from '@angular/core';
import { Chapter } from '../models/chapter'
import { HttpClient} from '@angular/common/http';
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
}
