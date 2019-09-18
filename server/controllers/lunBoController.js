'use strict';

const lunBoData = require('../data/lunBoData');

exports.getLunBo = (req, res, next) => {
    res.json({ message: lunBoData });
};