const express = require('express');
const bodyParser = require('body-parser');
const itemRouter = require('./Routes/itemRouter');
const connectDB = require('./Database/db');

const app = express();

app.use(bodyParser.json());


app.get('/', (req, res)=>{
    res.send("<h1>Welcome to Inventory Management System</h1>");
})

app.use('/', itemRouter)


app.get('*', (req, res)=>{
    res.sendStatus(404);
})

app.listen(8080, (req, res)=>{
    console.log("Server is running at port 8080 !!!!")
})