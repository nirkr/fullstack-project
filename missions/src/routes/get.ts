import express, {Request,Response} from "express";
import { Mission } from "../models/Mission";

const router = express.Router();

router.get('/api/missions', async (req: Request, res:Response) => {
    try{
        console.log('db');
        
        const missions = await Mission.find({});
        res.status(200).send(missions);
    }
    catch (err){
        res.status(400).send(err);
    };    
});


export {router as getRouter};