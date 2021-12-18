import { AuthService } from 'src/auth/auth.service';
import { JWTAuthDTO, JWTPayloadDTO, RegisterUserDTO } from 'src/dtos';
import { User } from 'src/entities';
import { UserRepository } from 'src/repositories/user.repository';
export declare class UserService {
    private readonly authService;
    private readonly userRepository;
    constructor(authService: AuthService, userRepository: UserRepository);
    loginUser(user: User): Promise<JWTAuthDTO>;
    registerUser(registerUserDTO: RegisterUserDTO): Promise<JWTAuthDTO>;
    getMe(user: JWTPayloadDTO): Promise<User>;
}
