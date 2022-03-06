import { Request, Response, NextFunction } from "express";

export const requireAuth = (req:Request, res:Response, next:NextFunction) => {
    if(!req.headers.authorization) {
        res.status(401).send('Not Authenticated')
    }
    next();
}