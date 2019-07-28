import { User } from './user'
import { Tag } from './tag'

export class Story {
    constructor(
        public storyId: number,
        public author: User,
        public name: string,
        public tags: Tag[],
        public type: number,
        public vote: number
    ){}
    
}