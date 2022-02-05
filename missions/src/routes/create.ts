import express, {Request,Response} from "express";
import { Mission } from "../models/Mission";

const router = express.Router();

router.post('/api/missions', async (req: Request, res:Response) => {
    try{
        const newMission = await Mission.build(req.body);
        res.status(201).send(newMission);
    }
    catch (err){
        res.status(400).send(err);
    };    
});


export {router as createRouter};