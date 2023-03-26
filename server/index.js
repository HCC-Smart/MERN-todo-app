import express from 'express';
import dotenv from 'dotenv';
import mongoose, { connect } from 'mongoose';
import router from './routes/itemRoute.js';
import cors from 'cors';



dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 1000

app.listen(process.env.PORT, ()=>{
    console.log(`server running on ${PORT}`);
});

mongoose.connect(process.env.MONGO_URL, (err)=>{
    if(err){
        console.log(`something wrong ${err}`);
    }else{
        console.log('connected DB');
    }
});

app.use("/api", router)
