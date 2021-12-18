"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("./auth/auth.module");
const main_config_1 = require("./configs/main.config");
const db_service_1 = require("./db.service");
const location_module_1 = require("./location/location.module");
const middlewares_1 = require("./middlewares");
const user_module_1 = require("./user/user.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(middlewares_1.LoginValidationMiddleware).forRoutes({
            path: 'users/login',
            method: common_1.RequestMethod.POST,
        });
        consumer.apply(middlewares_1.RegisterValidationMiddleware).forRoutes({
            path: 'users/register',
            method: common_1.RequestMethod.POST,
        });
        consumer.apply(middlewares_1.LocationCreateValidationMiddleware).forRoutes({
            path: 'locations/create',
            method: common_1.RequestMethod.POST,
        });
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [main_config_1.config],
                envFilePath: '.env',
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useClass: db_service_1.DatabaseConfig,
            }),
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            location_module_1.LocationModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map