'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./routers/apiRouter');

let app = express();

app.use('/public', express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length,Authorization,Accept,X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'POST,GET,PUT,DELETE,OPTIONS');
    next();
});

app.use('/api', apiRouter);

app.listen('8888', () => {
    console.log('服务器启动了，端口号：8888');
});