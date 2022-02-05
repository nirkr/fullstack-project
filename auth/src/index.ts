import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import { authRouter } from "./routes/authRoutes";
import { missionRouter } from './routes/missionRoutes'
// import { currentUser } from "./middlewares/currentUser";

dotenv.config();

const start = async () => {
  const app = express();
  if(!process.env.JWT_KEY){
      throw new Error('jwt key is not properly defined');
  };
  if(!process.env.MONGO_URL){
      throw new Error('mongo url is not properly defined');
  };
  try{
    await mongoose.connect(process.env.MONGO_URL)
    console.log('connected to mongo');
  } catch (err){
    console.error(err);
  }
  app.use(bodyParser.json());
  app.use(cors());
    
  // app.use(currentUser);
  app.use(authRouter);
  app.use(missionRouter);
  
  app.listen(4002, () => console.log("app listens to port 4002"));
}

start();
