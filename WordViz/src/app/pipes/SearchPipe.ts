import { Pipe, PipeTransform } from '@angular/core';
import { Chapter } from '../models/chapter';
import { Tag } from '../models/tag';

@Pipe({
  name: 'searchFilter'
})
export class SearchPipe implements PipeTransform {
  constructor() { }
  tags:Tag[]=[];

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


            
            if(key == 'story' ) {
              val = c[key].author.displayName;
              val2 = c[key].name;
              this.tags = c[key].tags;
            }
            if(key == 'name'){
                val3= c[key];     
            }


            //search by tag
            for(let tag of this.tags){
              if(tag.name.toLowerCase().includes(args.toLowerCase())){
                include = true;
                break;
              }
            }
            
            //searh by author name
            if(val.toLowerCase().includes(args.toLowerCase())) {
                include = true;
            }
            //search by story name         
            if(val2.toLowerCase().includes(args.toLowerCase())) {
                    include = true;
            }
            //search by chapter name
            if(val3.toLowerCase().includes(args.toLowerCase())) {
                include = true;
            }
        }
    return include;
    });
  }
}