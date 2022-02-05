import dotenv from "dotenv";
import express, {Request, Response} from 'express';
import {body} from 'express-validator';
import {getMissions, createMission, updateMission, deleteMission} from '../services/missionService';
import {requireAuth} from '../middlewares/requireAuth';
import { validateRequest } from "../middlewares/validateRequest";

dotenv.config();
const router = express.Router();

router.post('/api/mission',[
    body('key')
    .notEmpty()
    .withMessage('key was not provided'),
    body('value')
    .notEmpty()
    .withMessage('value was not provided'),
], validateRequest, requireAuth, async (req: Request, res:Response) => {
    try{
        const newMission = await createMission(req.body)
        res.status(201).send(newMission);
    }catch(err){
        res.status(400).send(err);
    }
})
router.get('/api/mission', requireAuth, async (req: Request, res:Response) => {
    try{
        const missions = await getMissions()
        res.status(200).send(missions);
    }catch(err){
        res.status(400).send(err);
    }
})
router.put ('/api/mission/:id', requireAuth, async (req: Request, res:Response) => {
    try{
        const missionId = req.params.id;
        if (!missionId){
            throw new Error('missionId was not provided')
        }
        const updatedMission = await updateMission(missionId, req.body)
        res.status(200).send(updatedMission);
    }catch(err){
        res.status(400).send(err);
    }
})
router.delete ('/api/mission/:id', requireAuth, async (req: Request, res:Response) => {
    try{
        const missionId = req.params.id;
        if (!missionId){
            throw new Error('missionId was not provided')
        }
        await deleteMission(missionId);
        res.status(200).send({});
    }catch(err){
        res.status(400).send(err);
    }
})

export {router as missionRouter};