const express = require("express");

const { create, read, readss, list, update, remove, getSubss } = require("../controllers/category");
// const {  } = require("../controllers/auth");
const { authCheck,  adminCheck} = require("../middlerware/auth");

const router = express.Router()
//authCheck, adminCheck,
router.post('/category', authCheck, adminCheck, create);
router.get('/category/:slug',  read);

router.get('/categories', list);
router.put('/category/:slug', authCheck, adminCheck, update);
router.delete('/category/:slug', authCheck, adminCheck, remove);
router.get('/category/subs/:_id', getSubss);


module.exports = router;