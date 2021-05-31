const express = require("express");
const { createOupdateuser, currentUser } = require("../controllers/auth");
const { authCheck,  adminCheck} = require("../middlerware/auth");

const router = express.Router()

router.post('/create-update-user',authCheck ,createOupdateuser);
router.post('/current-user', authCheck , currentUser);
router.post('/current-admin', authCheck ,adminCheck, currentUser);

module.exports = router;