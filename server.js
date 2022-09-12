const express = require('express');
var app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router  = require('./src/routers/table.routes');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));





app.use((req,res, next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,PUT,OPTIONS,DELETE"
    );
    next();
})

app.use("/table",router)


mongoose.connect("mongodb+srv://vinoba99:vinoba@cluster0.8rrte.mongodb.net/mill")
.then(()=>{
  console.log('connected successfully');
  app.listen(4000,console.log("running:4000"))
})
.catch(()=>{
  console.log("connection failed");
})
module.exports=app;