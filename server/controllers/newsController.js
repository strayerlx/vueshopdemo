'use strict';

const newsListData = require('../data/newsListData');
const newsDetailData = require('../data/newsDetailData');

exports.getNewsList = (req, res, next) => {
    res.json({ message: newsListData });
};

exports.getNewsDetail = (req, res, next) => {
    let newsId = req.params.id;
    let newsListItem = newsListData.find((item, index) => {
        return item.id === newsId;
    });
    let newsDetailItem = newsDetailData.find((item, index) => {
        return item.newsId === newsId;
    });
    const { title, click, addTime } = newsListItem;
    const { id, content } = newsDetailItem;
    let news = { id, title, click, addTime, content };
    res.json({ message: news });
};