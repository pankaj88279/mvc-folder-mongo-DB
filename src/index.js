const express=require('express');
const { RegisterRoute } = require('./routes/admin/register');
const app=express();
require('dotenv').config()

app.use(express.json());

app.use(RegisterRoute)

let port=process.env.PORT

app.listen(port,()=>{
    console.log('Running port',port)
})