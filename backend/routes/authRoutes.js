const express = require('express');
const router = express.Router();

router.post('/register', (req,res)=>{
    try {
         
    }
    catch (e){
        console.log(e);
        res.status(500).send("Error");
    }
})






module.exports = router;