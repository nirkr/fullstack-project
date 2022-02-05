import express, {Request, Response} from 'express';
import {body} from 'express-validator';
import cors from 'cors';
import {validateRequest} from '../middlewares/validateRequest';
import {signUpService, signInService} from '../services/authService';

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
    const jwtUser = await signUpService (userName, password);
    res.status(201).json({
        userName,
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

    const jwtUser = await signInService(userName, password);
    res.status(200).send({
        userName,
        token: jwtUser,
    });
})

export {router as authRouter};