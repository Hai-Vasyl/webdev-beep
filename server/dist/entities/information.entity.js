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
exports.Information = void 0;
const typeorm_1 = require("typeorm");
const location_entity_1 = require("./location.entity");
const user_entity_1 = require("./user.entity");
let Information = class Information extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Information.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Information.prototype, "created", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Information.prototype, "updated", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.informations),
    __metadata("design:type", user_entity_1.User)
], Information.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => location_entity_1.Location),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", location_entity_1.Location)
], Information.prototype, "location", void 0);
Information = __decorate([
    (0, typeorm_1.Entity)('informations')
], Information);
exports.Information = Information;
//# sourceMappingURL=information.entity.js.map