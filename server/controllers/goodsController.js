'use strict';

const goodsListData = require('../data/goodsListData');
const goodsDetailData = require('../data/goodsDetailData');
const goodsDetailImagesData = require('../data/goodsDetailImagesData');

exports.getGoodsListByPage = (req, res, next) => {
    let pageSize = 10;
    let page = parseInt(req.query.pageindex);
    let lastIndex = Math.ceil(goodsListData.length / pageSize);
    let goodsList = page === lastIndex? goodsListData.slice((lastIndex - 1) * pageSize) : goodsListData.slice((page - 1) * pageSize, page * pageSize);
    res.json({ message: goodsList });
};

exports.getGoodsInfo = (req, res, next) => {
    let goodsId = req.params.goodsId;
    let goodsInfo = goodsDetailData.find((item, index) => {
        return item.id === goodsId;
    });
    let goodsListItem = goodsListData.find((item, index) => {
        return item.id === goodsId;
    });
    goodsInfo.title = goodsListItem.title;
    goodsInfo['sell_price'] = goodsListItem['sell_price'];
    goodsInfo['market_price'] = goodsListItem['market_price'];
    goodsInfo['stock_quantity'] = goodsListItem['stock_quantity'];
    res.json({ message: goodsInfo });
};

exports.getGoodsThumImages = (req, res, next) => {
    let goodsId = req.params.goodsId;
    let goodsThumImages = goodsDetailImagesData.filter(item => {
        return item.goodsId === goodsId;
    });
    res.json({ message: goodsThumImages });
};