const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/InventoryItems')
        console.log('Database connected successfully !!!');
    }
    catch(error){
        console.log("Sorry, couldn't connect to Database !!!");
    }
}

connectDB();

module.exports = connectDB;