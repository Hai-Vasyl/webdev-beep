"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcryptjs");
const dtos_1 = require("../dtos");
const user_repository_1 = require("../repositories/user.repository");
let AuthService = class AuthService {
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    async loginValidate(loginUserDTO) {
        const user = await this.userRepository.findByEmail(loginUserDTO.email);
        if (!user) {
            throw new common_1.UnauthorizedException({
                param: 'email',
                message: 'User with this email is not exists',
            });
        }
        const isValidPassword = bcrypt.compareSync(loginUserDTO.password, user.password);
        if (!isValidPassword) {
            throw new common_1.UnauthorizedException({
                param: 'password',
                message: 'Password is wrong, try another one',
            });
        }
        return user;
    }
    async registerValidate({ email }) {
        const user = await this.userRepository.findByEmail(email);
        if (user) {
            throw new common_1.UnauthorizedException({
                param: 'email',
                message: 'User with this email is already exists',
            });
        }
    }
    async login(user) {
        return {
            access_token: this.jwtService.sign({
                userId: user.id,
            }),
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map