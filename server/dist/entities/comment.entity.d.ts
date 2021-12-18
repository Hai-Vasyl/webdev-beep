import { BaseEntity } from 'typeorm';
import { Location } from './location.entity';
import { User } from './user.entity';
export declare class Comment extends BaseEntity {
    id: number;
    content: string;
    responseCount: number;
    user: User;
    comment: Comment;
    location: Location;
    responses: Comment[];
    created: Date;
    updated: Date;
}
