const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to Database: ${conn.connection.host}` .bgBlue.cyan)
    }catch(error){
        console.log(`Error in MongoDB ${error}` .bgRed.white)
    }
}

module.exports = connectDB;