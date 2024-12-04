require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


// middlewares
app.use(express.json());
app.use(cors());


// base api 
app.get('/', (req, res)=>{
    res.send("Welcome to Fly Abroad server");
})






app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})