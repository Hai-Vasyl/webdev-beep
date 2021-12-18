import { Repository } from 'typeorm';
import { User } from 'src/entities';
import { JWTPayloadDTO, RegisterUserDTO } from 'src/dtos';
export declare class UserRepository extends Repository<User> {
    findByEmail(email: string): Promise<User>;
    add(registerUserDTO: RegisterUserDTO): Promise<User>;
    findUserById(user: JWTPayloadDTO): Promise<User>;
}
