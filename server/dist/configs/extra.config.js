"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ path: '.env' });
exports.config = {
    jwt_secret: process.env.JWT_SECRET,
};
//# sourceMappingURL=extra.config.js.map