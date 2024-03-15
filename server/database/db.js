import mongoose from "mongoose"

const Connection = async(username, password) => {
    const URL = `mongodb://${username}:${password}@ac-2kia8eg-shard-00-00.m5zfyvi.mongodb.net:27017,ac-2kia8eg-shard-00-01.m5zfyvi.mongodb.net:27017,ac-2kia8eg-shard-00-02.m5zfyvi.mongodb.net:27017/?ssl=true&replicaSet=atlas-muq34r-shard-0&authSource=admin&retryWrites=true&w=majority&appName=blog-app`;
    try{
        await mongoose.connect(URL, { useNewUrlParser:true });
        console.log('Database connected successfully');
    }catch(error){
        console.log('error while connecting with the database ', error);
    }
}

export default Connection;
//mongodb+srv://najmera64725:<password>@blog-app.xyp1jxl.mongodb.net/