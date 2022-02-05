import { Request, Response, NextFunction } from "express";

export const requireAuth = (req:Request, res:Response, next:NextFunction) => {
    if(!req.headers.authorization) {
        throw new Error('Not Authorized')
    }
    next();
}