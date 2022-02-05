import {Request, Response, NextFunction} from "express";
import {validationResult} from 'express-validator'

export const validateRequest = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new Error(`request fields are not valid: ${errors.array()}`);
    }
    next();
}