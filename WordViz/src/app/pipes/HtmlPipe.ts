import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'HtmlPipe'
})

export class HtmlPipe implements PipeTransform {
    transform(value: string): any {
        return value.replace(/<.*?>/g, '');
    }
}