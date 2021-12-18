import { BaseEntity } from 'typeorm';
import { Comment } from './comment.entity';
import { Rating } from './rating.entity';
import { User } from './user.entity';
export declare class Location extends BaseEntity {
    id: number;
    coordinates: string[];
    title: string;
    images: string[];
    description: string;
    user: User;
    comments: Comment[];
    ratings: Rating[];
    likeCount: number;
    created: Date;
    updated: Date;
}
