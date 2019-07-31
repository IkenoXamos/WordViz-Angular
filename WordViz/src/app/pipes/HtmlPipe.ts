import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'HtmlPipe'
})

export class HtmlPipe implements PipeTransform {
value2:string;
value3:string;

    transform(value: string): any {
        if(value != null){
            this.value2 = value.toString().replace(/<.*?>/g, '');
            this.value3= this.value2.toString().replace(/&.*?;/g, ' ');
            return this.value3;
        }
        else return value;
    }
}