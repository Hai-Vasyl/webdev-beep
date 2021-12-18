"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationRepository = void 0;
const typeorm_1 = require("typeorm");
const entities_1 = require("../entities");
const create_location_dto_1 = require("../dtos/create-location.dto");
const update_location_dto_1 = require("../dtos/update-location.dto");
const dtos_1 = require("../dtos");
let LocationRepository = class LocationRepository extends typeorm_1.Repository {
    async createLocation({ coordinates, title, images, description }, user) {
        const location = Object.assign(Object.assign({}, new entities_1.Location()), { coordinates,
            title,
            images,
            description, user: { id: Number(user.userId) } });
        return this.save(location);
    }
    async updateLocation({ coordinates }, locationId, user, transactionManager) {
        const manager = transactionManager || this;
        return manager
            .createQueryBuilder()
            .update(entities_1.Location)
            .set({
            coordinates,
            user: { id: Number(user.userId) },
        })
            .where({ id: locationId })
            .execute();
    }
    async deleteLocation(locationId, transactionManager) {
        const manager = transactionManager || this;
        return manager
            .createQueryBuilder()
            .delete()
            .from(entities_1.Location)
            .where({ id: locationId })
            .execute();
    }
    async findAllLocations() {
        return this.createQueryBuilder('locations').getMany();
    }
    async findLocationById(id) {
        return this.createQueryBuilder('locations').where({ id }).getOne();
    }
};
LocationRepository = __decorate([
    (0, typeorm_1.EntityRepository)(entities_1.Location)
], LocationRepository);
exports.LocationRepository = LocationRepository;
//# sourceMappingURL=location.repository.js.map