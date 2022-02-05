import express, {Request,Response} from "express";
import { Mission } from "../models/Mission";

const router = express.Router();

router.delete('/api/missions/:id', async (req: Request, res:Response) => {
    const missionToDelete = await Mission.findById(req.params.id);
    if (!missionToDelete){
        throw new Error ('no mission was found with this id')
    }
    try {
        await Mission.findByIdAndRemove(req.params.id);
        res.status(200).send();
    }
    catch (err){
        res.status(400).send(err);
    };    
});


export {router as deleteRouter};