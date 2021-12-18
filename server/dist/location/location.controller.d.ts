import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateLocationDTO } from 'src/dtos/create-location.dto';
import { UpdateLocationDTO } from 'src/dtos/update-location.dto';
import { Location } from 'src/entities';
import { LocationService } from './location.service';
export declare class LocationController {
    private readonly locationService;
    constructor(locationService: LocationService);
    createLocation(createLocationDTO: CreateLocationDTO, req: any): Promise<Location>;
    updateLocation(locationId: string, updateLocationDTO: UpdateLocationDTO, req: any): Promise<UpdateResult>;
    deleteLocation(locationId: string): Promise<DeleteResult>;
    findAllLocations(): Promise<Location[]>;
    findLocation(id: any): Promise<Location>;
}
