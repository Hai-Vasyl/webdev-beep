"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginValidationMiddleware = void 0;
const common_1 = require("@nestjs/common");
const Joi = require("joi");
const validation_middleware_1 = require("./validation.middleware");
let LoginValidationMiddleware = class LoginValidationMiddleware extends validation_middleware_1.ValidationMiddleware {
    constructor() {
        super(...arguments);
        this.schema = Joi.object({
            email: Joi.string().required().email().label('Email'),
            password: Joi.string().required().min(4).label('Password'),
        }).options({ abortEarly: false });
    }
};
LoginValidationMiddleware = __decorate([
    (0, common_1.Injectable)()
], LoginValidationMiddleware);
exports.LoginValidationMiddleware = LoginValidationMiddleware;
//# sourceMappingURL=login-validation.middleware.js.map