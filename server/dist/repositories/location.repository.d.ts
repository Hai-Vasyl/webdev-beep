import { DeleteResult, EntityManager, Repository, UpdateResult } from 'typeorm';
import { Location } from 'src/entities';
import { CreateLocationDTO } from 'src/dtos/create-location.dto';
import { UpdateLocationDTO } from 'src/dtos/update-location.dto';
import { JWTPayloadDTO } from 'src/dtos';
export declare class LocationRepository extends Repository<Location> {
    createLocation({ coordinates, title, images, description }: CreateLocationDTO, user: JWTPayloadDTO): Promise<Location>;
    updateLocation({ coordinates }: UpdateLocationDTO, locationId: string, user: JWTPayloadDTO, transactionManager?: EntityManager): Promise<UpdateResult>;
    deleteLocation(locationId: string, transactionManager?: EntityManager): Promise<DeleteResult>;
    findAllLocations(): Promise<Location[]>;
    findLocationById(id: string): Promise<Location>;
}
