const mongoose = require('mongoose');
const connectDB = require('../Database/db')

const itemSchema =  mongoose.Schema({
    item:String,
    quantity: Number,
    price: Number
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item;