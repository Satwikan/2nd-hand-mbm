const express = require("express");
const { create, read, list, update, remove } = require("../controllers/sub");

const { authCheck,  adminCheck} = require("../middlerware/auth");

const router = express.Router()

router.post('/sub', authCheck, adminCheck, create);
router.get('/sub/:slug',  read);
router.get('/subs', list);
router.put('/sub/:slug', authCheck, adminCheck, update);
router.delete('/sub/:slug', authCheck, adminCheck, remove);

module.exports = router;