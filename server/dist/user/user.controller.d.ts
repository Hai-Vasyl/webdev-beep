import { RegisterUserDTO } from 'src/dtos';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    registerUser(registerUserDTO: RegisterUserDTO): Promise<import("src/dtos").JWTAuthDTO>;
    loginUser(req: any): Promise<import("src/dtos").JWTAuthDTO>;
    getMe(req: any): Promise<import("../entities").User>;
}
