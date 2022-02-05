import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

interface UserPayload {
    userName: string,
    id: string,
    iat: number,
};

declare global{
    namespace Express{
        interface Request{
            currentUser: UserPayload
        }
    }
}
//--------------------------------------------------------------
// req.currentuser will indicate for us if the cureent user got authenticated,
// and has the jwt in its cookie.
//--------------------------------------------------------------
export const currentUser = (req: Request, res:Response, next: NextFunction) => {
    // if (!req.session?.jwt) {
    // if (!req.headers.authorization) {
        return next();
    // }
    // const payload = jwt.verify(req.headers.authorization.split(' ')[1],process.env.JWT_KEY!) as UserPayload
    // const payload = jwt.verify(req.session.jwt,process.env.JWT_KEY!) as UserPayload
   
    // req.currentUser = payload;
    // next();
}