import { BaseEntity } from 'typeorm';
import { Comment } from './comment.entity';
import { Location } from './location.entity';
import { Rating } from './rating.entity';
export declare enum UserRoles {
    ADMIN = "admin",
    USER = "user"
}
export declare class User extends BaseEntity {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    role: string;
    avatar: string;
    color: string;
    created: Date;
    updated: Date;
    comments: Comment[];
    ratings: Rating[];
    locations: Location[];
}
