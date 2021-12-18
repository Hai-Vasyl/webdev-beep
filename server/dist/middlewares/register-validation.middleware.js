"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterValidationMiddleware = void 0;
const common_1 = require("@nestjs/common");
const Joi = require("joi");
const validation_middleware_1 = require("./validation.middleware");
let RegisterValidationMiddleware = class RegisterValidationMiddleware extends validation_middleware_1.ValidationMiddleware {
    constructor() {
        super(...arguments);
        this.schema = Joi.object({
            firstname: Joi.string().required().max(30).label('First Name'),
            lastname: Joi.string().required().max(30).label('Last Name'),
            email: Joi.string().required().email().label('Email'),
            password: Joi.string().required().min(4).label('Password'),
            role: Joi.string().label('Role'),
        }).options({ abortEarly: false });
    }
};
RegisterValidationMiddleware = __decorate([
    (0, common_1.Injectable)()
], RegisterValidationMiddleware);
exports.RegisterValidationMiddleware = RegisterValidationMiddleware;
//# sourceMappingURL=register-validation.middleware.js.map