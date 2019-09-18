'use strict';
const express = require('express');
const lunBoController = require('../controllers/lunBoController');
const newsController = require('../controllers/newsController');
const photoShareController = require('../controllers/photoShareController.js');
const goodsController = require('../controllers/goodsController');
const userController = require('../controllers/userController');
const commentController = require('../controllers/commentController');
const shopcartController = require('../controllers/shopcartController');

let router = express.Router();

router.get('/getlunbo', lunBoController.getLunBo)
    .get('/getnewslist', newsController.getNewsList)
    .get('/getnew/:id', newsController.getNewsDetail)
    .get('/getimgcategory', photoShareController.getImgCategory)
    .get('/getimages/:categoryId', photoShareController.getImgs)
    .get('/getimageInfo/:imgId', photoShareController.getImageInfo)
    .get('/getthumimages/:imgId', photoShareController.getThumImages)
    .get('/getgoods', goodsController.getGoodsListByPage)
    .get('/goods/getinfo/:goodsId', goodsController.getGoodsInfo)
    .get('/getgoodsthumimages/:goodsId', goodsController.getGoodsThumImages)
    .post('/regist', userController.registerUser)
    .post('/login', userController.loginUser)
    .post('/add_comment', commentController.addComment)
    .get('/getcomments', commentController.getCommentsByPage)
    .post('/add_shopcart', shopcartController.addShopcart)
    .get('/getshopcarts', shopcartController.getShopcarts);

module.exports = router;