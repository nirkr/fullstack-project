import express, {Request,Response} from "express";
import { Mission } from "../models/Mission";

const router = express.Router();

router.put('/api/missions/:id', async (req: Request, res:Response) => {
    const {key, value} = req.body;
    const missionToUpdate = await Mission.findById(req.params.id);
    if (!missionToUpdate){
        throw new Error ('no mission was found with this id')
    }
    missionToUpdate.set ({
        key,
        value,
    })
    try{
        await missionToUpdate.save();
        res.status(200).send(missionToUpdate);
    }
    catch (err){
        res.status(400).send(err);
    };    
});


export {router as updateRouter};