import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as Joi from 'joi';
export declare class ValidationMiddleware implements NestMiddleware {
    schema: Joi.ObjectSchema<any>;
    use(req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>>;
}
