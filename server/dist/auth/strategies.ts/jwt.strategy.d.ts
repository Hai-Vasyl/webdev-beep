import { Strategy } from 'passport-jwt';
import { JWTPayloadDTO } from 'src/dtos';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: JWTPayloadDTO): JWTPayloadDTO;
}
export {};
