import * as Joi from 'joi';
import { ValidationMiddleware } from './validation.middleware';
export declare class LoginValidationMiddleware extends ValidationMiddleware {
    schema: Joi.ObjectSchema<any>;
}
