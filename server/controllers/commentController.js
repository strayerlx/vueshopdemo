'use strict';

const moment = require('moment');
const lodash = require('lodash');
const commentListData = require('../data/commentListData');

exports.addComment = (req, res, next) => {
    const user_name = req.body.user_name;
    const goodsId = req.body.goodsId ? req.body.goodsId : '';
    const photoShareId = req.body.photoShareId ? req.body.photoShareId : '';
    const content = req.body.content;
    const add_time = moment(new Date()).format('YYYY/MM/DD HH:mm:ss');
    let maxComment = lodash.maxBy(commentListData, item => parseInt(item.id));
    const newId = parseInt(maxComment.id) + 1;
    commentListData.push({
        id: newId.toString(),
        user_name,
        goodsId,
        photoShareId,
        content,
        add_time,
    });
    res.json({
        code: '1',
        msg: '评论成功！',
    });
};

exports.getCommentsByPage = (req, res, next) => {
    let pageSize = 10;
    let page = parseInt(req.query.pageindex);
    let goodsId = req.query.goodsId;
    let photoShareId = req.query.photoShareId;
    let lastIndex = Math.ceil(commentListData.length / pageSize);
    let commentList = [];
    if (goodsId) {
        commentList = commentListData.filter(item => item.goodsId === goodsId);
    } else {
        commentList = commentListData.filter(item => item.photoShareId === photoShareId);
    }
    commentList = page === lastIndex ? commentListData.slice((lastIndex - 1) * pageSize) : commentListData.slice((page - 1) * pageSize, page * pageSize);
    commentList = commentList.reverse();
    res.json({ message: commentList });
};