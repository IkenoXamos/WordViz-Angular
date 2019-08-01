import { Pipe, PipeTransform } from '@angular/core';
import { Chapter } from '../models/chapter';
import { Tag } from '../models/tag';
import { HtmlPipe } from './HtmlPipe';

@Pipe({
  name: 'searchFilter'
})
export class SearchPipe implements PipeTransform {
  constructor() { }
  tags:Tag[]=[];
  argsSplit:string[]=[];

  transform(value: any, args?: string): any {
    if (!args) {
      return value;
    }
    return value.filter((c: Chapter) => {
        let include: boolean = false;
        for(let key in c) {
            this.tags= [];
            let val: string = '';
            let val2: string = '';
            let val3: string = '';
            let val4: string = '';


            
            if(key == 'story' ) {
              val = c[key].author.displayName;
              val2 = c[key].name;
              this.tags = c[key].tags;

              if (c[key].type==1){
                val4 = 'blog';
              }else{
                val4 = 'story';
              }

            }
            if(key == 'name'){
                val3= c[key];     
            }


            let arg:string = args;
              //search by tag
              for(let tag of this.tags){
                if(tag.name.toLowerCase().includes(arg.toLowerCase())){
                  include = true;
                  break;
                }else{
                  include = false;
                }
              }
              
              //searh by author name
              if(val.toLowerCase().includes(arg.toLowerCase())) {
                  include = true;
                  break;
              }else{
                include = false;
              }
              //search by story name         
              if(val2.toLowerCase().includes(arg.toLowerCase())) {
                  include = true;
                  break;
              }else{
                include = false;
              }
              //search by chapter name
              if(val3.toLowerCase().includes(arg.toLowerCase())) {
                  include = true;
                  break;
              }else{
                include = false;
              }

              //search by type
              if(val4.includes(arg.toLowerCase())) {
                include = true;
                break;
              }else{
              include = false;
              }
        }
    return include;
    });
  }
}