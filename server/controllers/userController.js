'use strict';

const lodash = require('lodash');
const userListData = require('../data/userListData');

exports.registerUser = (req, res, next) => {
    const account = req.body.account;
    const pwd = req.body.pwd;
    const sameUsers = userListData.filter(item => {
        return item.user_name === account;
    });
    if (sameUsers.length > 0) {
        res.json({
            code: '1',
            msg: '帐号已存在！'
        });
    } else {
        let maxUser = lodash.maxBy(userListData, item => parseInt(item.id));
        const newId = parseInt(maxUser.id) + 1;
        userListData.push({
            id: newId.toString(),
            user_name: account,
            pwd
        });
        res.json({
            code: '2',
            msg: '注册成功！'
        });
    }
};

exports.loginUser = (req, res, next) => {
    const account = req.body.account;
    const pwd = req.body.pwd;
    const sameUser = userListData.find((item, index) => item.user_name === account && item.pwd === pwd);
    if (sameUser) {
        res.json({
            code: '1',
            msg: '登录成功！',
        });
    } else {
        res.json({
            code: '2',
            msg: '帐号或密码错误！',
        });
    }
};