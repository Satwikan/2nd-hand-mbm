const express = require("express");

const router = express.Router()

router.get('/user', (req, res) => {
    res.send({
        data: "hey u hit user nodef'oo  api"
    }); 
    
});


module.exports = router;