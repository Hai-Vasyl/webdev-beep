"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const config = () => {
    const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;
    return {
        database: {
            type: 'mysql',
            host: DB_HOST,
            port: DB_PORT,
            username: DB_USERNAME,
            password: DB_PASSWORD,
            database: DB_NAME,
            entities: ['dist/**/*.entity{.ts,.js}'],
            synchronize: true,
        },
    };
};
exports.config = config;
//# sourceMappingURL=main.config.js.map