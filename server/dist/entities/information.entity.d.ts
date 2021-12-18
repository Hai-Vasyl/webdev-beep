import { BaseEntity } from 'typeorm';
import { Location } from './location.entity';
import { User } from './user.entity';
export declare class Information extends BaseEntity {
    id: number;
    created: Date;
    updated: Date;
    user: User;
    location: Location;
}
