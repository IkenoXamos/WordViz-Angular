import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'SpacePipe'})
export class SpacePipe implements PipeTransform {
  transform(value: string): any {
    if(value != null){
        return value.toString().replace(/,/g, ", ");
    }else{
        return value;
    }
  }
}
