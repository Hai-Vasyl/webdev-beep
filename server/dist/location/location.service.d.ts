import { JWTPayloadDTO } from 'src/dtos';
import { CreateLocationDTO } from 'src/dtos/create-location.dto';
import { UpdateLocationDTO } from 'src/dtos/update-location.dto';
import { Location } from 'src/entities';
import { LocationRepository } from 'src/repositories/location.repository';
import { DeleteResult, UpdateResult } from 'typeorm';
export declare class LocationService {
    private readonly locationRepository;
    constructor(locationRepository: LocationRepository);
    createLocation(createLocationDTO: CreateLocationDTO, user: JWTPayloadDTO): Promise<Location>;
    updateLocation(updateLocationDTO: UpdateLocationDTO, locationId: string, user: JWTPayloadDTO): Promise<UpdateResult>;
    deleteLocation(locationId: string): Promise<DeleteResult>;
    findAllLocations(): Promise<Location[]>;
    findLocation(id: string): Promise<Location>;
}
