import { JwtService } from '@nestjs/jwt';
import { JWTAuthDTO, RegisterUserDTO } from 'src/dtos';
import { UserRepository } from 'src/repositories/user.repository';
import { LoginUserDTO } from '../dtos/login-user.dto';
import { User } from '../entities';
export declare class AuthService {
    private readonly userRepository;
    private jwtService;
    constructor(userRepository: UserRepository, jwtService: JwtService);
    loginValidate(loginUserDTO: LoginUserDTO): Promise<User>;
    registerValidate({ email }: RegisterUserDTO): Promise<void>;
    login(user: User): Promise<JWTAuthDTO>;
}
