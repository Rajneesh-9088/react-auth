const express = require('express');
const app = express();
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/react-auth',
 {
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(()=> console.log("DB Connected")) 
.catch((err)=> console.log(err));


app.get('/hello', (req,res)=>{
    res.send("Hi");
})












app.listen(3006,(req,res)=>{
    console.log('Server running at port 3006');
})








