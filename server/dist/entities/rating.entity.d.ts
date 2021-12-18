import { BaseEntity } from 'typeorm';
import { Location } from './location.entity';
import { User } from './user.entity';
export declare class Rating extends BaseEntity {
    id: number;
    like: boolean;
    location: Location;
    user: User;
    created: Date;
    updated: Date;
}
