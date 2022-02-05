import jwt from 'jsonwebtoken';
import {User} from '../models/User';
import { compare } from '../services/password';

const signUpService = async (userName:string, password:string) => {
    const user = User.build({
        userName, password
    });
    await user.save();
    
    const jwtUser = jwt.sign({
        id: user.id,
        userName,
    }, process.env.JWT_KEY!)
    return jwtUser;
}

const signInService = async (userName:string, password:string) => {
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
    return jwtUser;
}


export {signUpService, signInService}