import { Component, OnInit } from '@angular/core';
import { dictionary } from 'src/app/models/dictionary';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {

  constructor(private http:HttpClient) { }

  define:dictionary;

  ngOnInit() {
  }

  dictionaryRequest(word:string): void{
    this.http.get<dictionary>(
      "https://wordsapiv1.p.mashape.com/words/"+ word, 
      {headers: new HttpHeaders({'X-RapidAPI-Key': '38eaedeeedmshd8a85d668fb1f9dp1d568fjsnca0992abcacf'})}
      ).subscribe( response => {
        this.define = response
      });
  }

}
