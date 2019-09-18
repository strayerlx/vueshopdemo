'use strict';

const lodash = require('lodash');
const shopcartListData = require('../data/shopcartListData');
const goodsListData = require('../data/goodsListData');

exports.addShopcart = (req, res, next) => {
    const user_name = req.body.user_name;
    const localShopcarts = req.body.localShopcarts;
    const goodsId = req.body.goodsId;
    const quantity = req.body.quantity;
    if (localShopcarts) {
        const userShopcarts = shopcartListData.filter((item, index) => item.user_name === user_name);
        if (userShopcarts.length > 0) {
            localShopcarts.forEach((localItem, localIndex) => {
                userShopcarts.forEach((cartItem, cartIndex) => {
                    if (localItem.goodsId === cartItem.goodsId) {
                        cartItem.quantity += localItem.quantity;
                    } else {
                        let maxShopcart = lodash.maxBy(shopcartListData, item => parseInt(item.id));
                        const newId = parseInt(maxShopcart.id) + 1;
                        shopcartListData.push({
                            id: newId.toString(),
                            user_name,
                            goodsId: localItem.goodsId,
                            quantity: localItem.quantity,
                        });
                    }
                });
            });
        } else {
            localShopcarts.forEach((localItem, localIndex) => {
                let maxShopcart = lodash.maxBy(shopcartListData, item => parseInt(item.id));
                const newId = parseInt(maxShopcart.id) + 1;
                shopcartListData.push({
                    id: newId.toString(),
                    user_name,
                    goodsId: localItem.goodsId,
                    quantity: localItem.quantity,
                });
            });
        }
        res.json({
            msg: 'localStorage加车成功'
        });
    } else {
        const goodsItem = shopcartListData.find((item, index) => item.goodsId === goodsId && item.user_name === user_name);
        if (!goodsItem) {
            let maxShopcart = lodash.maxBy(shopcartListData, item => parseInt(item.id));
            const newId = parseInt(maxShopcart.id) + 1;
            shopcartListData.push({
                id: newId.toString(),
                user_name,
                goodsId,
                quantity,
            });
            res.json({
                code: '1',
                msg: '加车成功！'
            });
        } else {
            for (let i = 0; i < shopcartListData.length; i++) {
                if (shopcartListData[i].goodsId === goodsId) {
                    shopcartListData[i].quantity += quantity;
                    break;
                }
            }
            res.json({
                code: '2',
                msg: '修车成功！'
            });
        }
    }
};

exports.getShopcarts = (req, res, next) => {
    const user_name = req.query.account;
    let shopcartList = [];
    if (user_name) {
        shopcartList = shopcartListData.filter(item => item.user_name === user_name);
        shopcartList.forEach((item, index) => {
            goodsListData.forEach((goodsItem, goodsIndex) => {
                if (item.goodsId === goodsItem.id) {
                    item.img_url = goodsItem.img_url;
                    item.title = goodsItem.title;
                    item.sell_price = goodsItem.sell_price;
                    item.stock_quantity = goodsItem.stock_quantity;
                }
            });
        });
    } else {
        let goodsIds = req.query.goodsIds;
        goodsIds = goodsIds.split(',');
        goodsIds.forEach((item, index) => {
            goodsListData.forEach((goodsItem, goodsIndex) => {
                if (item === goodsItem.id) {
                    shopcartList.push({
                        goodsId: goodsItem.id,
                        img_url: goodsItem.img_url,
                        title: goodsItem.title,
                        sell_price: goodsItem.sell_price,
                        stock_quantity: goodsItem.stock_quantity,
                    });
                }
            });
        });
    }
    res.json({
        message: shopcartList
    });
};