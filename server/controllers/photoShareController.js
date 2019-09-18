'use strict';

const photoShareCategoryData = require('../data/photoShareCategoryData');
const photoShareSummaryData = require('../data/photoShareSummaryData');
const photoShareDetailData = require('../data/photoShareDetailData');
const photoShareDetailImagesData = require('../data/photoShareDetailImagesData');

exports.getImgCategory = (req, res, next) => {
    res.json({ message: photoShareCategoryData });
};

exports.getImgs = (req, res, next) => {
    let categoryId = req.params.categoryId;
    let imgs = categoryId === '0' ? photoShareSummaryData : photoShareSummaryData.filter(item => {
        return item.categoryId === categoryId;
    });
    res.json({ message: imgs });
};

exports.getImageInfo = (req, res, next) => {
    let imgId = req.params.imgId;
    let imgInfo = photoShareDetailData.find((item, index) => {
        return item.id === imgId;
    });
    res.json({ message: imgInfo });
};

exports.getThumImages = (req, res, next) => {
    let imgId = req.params.imgId;
    let thumImages = photoShareDetailImagesData.filter(item => {
        return item.detailId === imgId;
    });
    res.json({ message: thumImages });
};