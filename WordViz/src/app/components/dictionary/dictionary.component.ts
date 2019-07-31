import { Component, OnInit } from '@angular/core';
import { dictionary } from 'src/app/models/dictionary';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { dictionaryResults } from 'src/app/models/dictionaryResults';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {

  constructor(private http:HttpClient) { }

  define:dictionary;
  length: number;
  mod:number;
  min = 0;
  max = 5;
  dex = 1;

  ngOnInit() {
  }

  dictionaryRequest(word:string): void{
    this.http.get<dictionary>(
      "https://wordsapiv1.p.mashape.com/words/"+ word, 
      {headers: new HttpHeaders({'X-RapidAPI-Key': '38eaedeeedmshd8a85d668fb1f9dp1d568fjsnca0992abcacf'})}
      ).subscribe( 
        data => {
          this.define = data;
          this.length = this.define.results.length;
          this.mod = this.length%5;
      });
  }

  dictionary(word:string){
    this.min = 0;
    this.max = 5;
    this.dex = 1;
    this.dictionaryRequest(word);
  }

  nextPage(){
    this.min += 5;
    this.max += 5;
    this.dex += 5;
  }
  lastPage(){
    this.min -= 5;
    this.max -= 5;
    this.dex -= 5;
  }

}
