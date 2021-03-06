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
exports.Location = void 0;
const typeorm_1 = require("typeorm");
const comment_entity_1 = require("./comment.entity");
const rating_entity_1 = require("./rating.entity");
const user_entity_1 = require("./user.entity");
let Location = class Location extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Location.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'simple-array' }),
    __metadata("design:type", Array)
], Location.prototype, "coordinates", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Location.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'simple-array' }),
    __metadata("design:type", Array)
], Location.prototype, "images", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], Location.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.locations),
    __metadata("design:type", user_entity_1.User)
], Location.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comment_entity_1.Comment, (comment) => comment.location, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Array)
], Location.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => rating_entity_1.Rating, (rating) => rating.location, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Array)
], Location.prototype, "ratings", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Location.prototype, "likeCount", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Location.prototype, "created", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Location.prototype, "updated", void 0);
Location = __decorate([
    (0, typeorm_1.Entity)('locations')
], Location);
exports.Location = Location;
//# sourceMappingURL=location.entity.js.map