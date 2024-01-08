import mongoose from "mongoose";
import colors from "colors";

const connectdb = async()=>{
    try{
        const con = await mongoose.connect("mongodb+srv://aalok2:1234@cluster0.89mnes1.mongodb.net/");
        console.log(`connected to mongodb db ${con.connection.host}`);

    }
    catch(err){
        console.log(err);
    }
}

export default connectdb;
