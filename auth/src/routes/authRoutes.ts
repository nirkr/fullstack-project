import express, {Request, Response} from 'express';
import jwt from 'jsonwebtoken';
import {body} from 'express-validator';
import cors from 'cors';
import { User } from '../models/User';
import { compare } from '../services/password';
import {validateRequest} from '../middlewares/validateRequest';

const router = express.Router();
router.use(cors());

router.post('/api/auth/signup',cors(),[
    body('userName')
    .notEmpty()
    .withMessage('userName is required'),
    body('password')
    .notEmpty()
    .withMessage('password is required'),
],validateRequest,async (req: Request, res:Response) => {

    const { userName, password} = req.body;
    const user = User.build({
        userName, password
    });
    await user.save();
    
    const jwtUser = jwt.sign({
        id: user.id,
        userName,
    }, process.env.JWT_KEY!)

    res.status(201).json({
        userName,
        id: user.id,
        token: jwtUser
    });
})

router.post('/api/auth/signin',[
    body('userName')
    .notEmpty()
    .withMessage('userName is required'),
    body('password')
    .notEmpty()
    .withMessage('password is required'),
] , validateRequest, async (req: Request, res:Response) => {

    const { userName, password} = req.body;
    const user = await User.findOne({userName});
    if (!user){
        throw new Error('invalid credentials');
    }
    const isAuthenticated = await compare(user.password,password);
    if(!isAuthenticated){
        throw new Error('not authenticated')
    }
    const jwtUser = jwt.sign({
        id: user.id,
        userName
    },process.env.JWT_KEY!);

    res.status(200).send({
        userName,
        id: user.id,
        token: jwtUser,
    });
})

export {router as authRouter};