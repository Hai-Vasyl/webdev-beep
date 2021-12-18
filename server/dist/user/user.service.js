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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcryptjs");
const auth_service_1 = require("../auth/auth.service");
const dtos_1 = require("../dtos");
const entities_1 = require("../entities");
const user_repository_1 = require("../repositories/user.repository");
let UserService = class UserService {
    constructor(authService, userRepository) {
        this.authService = authService;
        this.userRepository = userRepository;
    }
    async loginUser(user) {
        return this.authService.login(user);
    }
    async registerUser(registerUserDTO) {
        await this.authService.registerValidate(registerUserDTO);
        const hashPassword = bcrypt.hashSync(registerUserDTO.password, 8);
        const user = await this.userRepository.add(Object.assign(Object.assign({}, registerUserDTO), { password: hashPassword }));
        return this.authService.login(user);
    }
    async getMe(user) {
        return this.userRepository.findUserById(user);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        user_repository_1.UserRepository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map