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
exports.LocationService = void 0;
const common_1 = require("@nestjs/common");
const dtos_1 = require("../dtos");
const create_location_dto_1 = require("../dtos/create-location.dto");
const update_location_dto_1 = require("../dtos/update-location.dto");
const entities_1 = require("../entities");
const location_repository_1 = require("../repositories/location.repository");
let LocationService = class LocationService {
    constructor(locationRepository) {
        this.locationRepository = locationRepository;
    }
    createLocation(createLocationDTO, user) {
        return this.locationRepository.createLocation(createLocationDTO, user);
    }
    updateLocation(updateLocationDTO, locationId, user) {
        return this.locationRepository.updateLocation(updateLocationDTO, locationId, user);
    }
    deleteLocation(locationId) {
        return this.locationRepository.deleteLocation(locationId);
    }
    findAllLocations() {
        return this.locationRepository.findAllLocations();
    }
    findLocation(id) {
        return this.locationRepository.findLocationById(id);
    }
};
LocationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [location_repository_1.LocationRepository])
], LocationService);
exports.LocationService = LocationService;
//# sourceMappingURL=location.service.js.map