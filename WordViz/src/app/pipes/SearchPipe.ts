import { Pipe, PipeTransform } from '@angular/core';
import { Chapter } from '../models/chapter';

@Pipe({
  name: 'searchFilter'
})
export class SearchPipe implements PipeTransform {
  constructor() { }
  transform(value: any, args?: string): any {
    if (!args) {
      return value;
    }
    return value.filter((c: Chapter) => {
        let include: boolean = false;
        for(let key in c) {
            let val: string = '';
            let val2: string = '';
            let val3: string = '';

            
            if(key == 'story' ) {
            val = c[key].author.displayName;
            val2 = c[key].name;
            }
            if(key == 'name'){
                val3= c[key];     
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