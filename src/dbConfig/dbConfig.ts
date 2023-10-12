import { log } from "console";
import mongoose, { mongo } from "mongoose";

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;

        connection.on('connected',()=>{
            console.log('MongoDb connected Sucessfully');
            
        })
        connection.on('error',(err)=>{
            console.log('MongoDB connection error'+
            err);
            process.exit()
            
        })
    } catch (error) {
        console.log('Something Went Wrong');
        console.log(error);
        
    }
}