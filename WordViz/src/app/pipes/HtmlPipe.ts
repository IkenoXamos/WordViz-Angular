import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'HtmlPipe'
})

export class HtmlPipe implements PipeTransform {
    transform(value: string): any {
        if(value != null){
            return value.toString().replace(/<.*?>/g, '');
        }
        else return value;
    }
}