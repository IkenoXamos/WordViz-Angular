import { Story } from './story';
import { Timestamp } from 'rxjs';

export class Chapter {
    constructor(
        public chapterId: number,
        public story: Story,
        public name: string,
        public content: string,
        public timestamp: Timestamp<any>
    ){}
    
    }