const express = require("express");
const { create, listAll, removes, list, productcount,reads ,listRelated} = require("../controllers/product");
// const {  } = require("../controllers/auth");
const { authCheck,  adminCheck} = require("../middlerware/auth");

const router = express.Router()
//authCheck, adminCheck,
router.post('/product', authCheck, adminCheck, create);
router.get('/product/total',productcount);
router.get('/productx/:slug', reads)
router.get('/products/:count', listAll);
// router.get('/category/:slug',  read);
// router.get('/categories', list);
// router.put('/category/:slug', authCheck, adminCheck, update);
// router.delete('/category/:slug', authCheck, adminCheck, remove);
router.delete('/product/:slug', authCheck, adminCheck,removes)
router.post('/products',list);
// router.put('/product/star/:productId',authCheck, productStar);
router.get('/product/related/:productId', listRelated);





module.exports = router;