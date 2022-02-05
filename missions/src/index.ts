import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { createRouter } from './routes/create';
import { updateRouter } from './routes/update';
import { getRouter } from './routes/get';
import { deleteRouter } from './routes/delete';

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
    
  app.use(createRouter);
  app.use(updateRouter);
  app.use(getRouter);
  app.use(deleteRouter);
  
  app.listen(4001, () => console.log("app listens to port 4001"));
}

start();
