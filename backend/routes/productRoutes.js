const express = require('express');
const router  = express.Router();
const  {isLoggedIn} = require('../middleware');

router.get('/products', isLoggedIn, (req,res)=>{

      res.send("Sending You All The Products");
})


module.exports = router;