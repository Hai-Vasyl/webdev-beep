import { UserRoles } from 'src/entities/user.entity';
export declare class RegisterUserDTO {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    role: UserRoles;
}
