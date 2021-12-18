"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalAuthGuard = exports.JwtAuthGuard = void 0;
const jwt_auth_guard_1 = require("./jwt-auth.guard");
Object.defineProperty(exports, "JwtAuthGuard", { enumerable: true, get: function () { return jwt_auth_guard_1.JwtAuthGuard; } });
const local_auth_guard_1 = require("./local-auth.guard");
Object.defineProperty(exports, "LocalAuthGuard", { enumerable: true, get: function () { return local_auth_guard_1.LocalAuthGuard; } });
//# sourceMappingURL=index.js.map