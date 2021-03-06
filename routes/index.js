var express = require('express');
var router = express.Router();
var rest = require('restler');
var logger = require('../Logger').logger;//记录后台日志
var servername = "http://v.juhe.cn/todayOnhistory";//“聚合数据”提供的接口

router.get('/', function (req, res) {
    res.render('index', {title: 'demo'})
});

//列表页面获取数据
router.get('/service/booksService/:month/:day', function (req, res) {
    rest.get(servername + '/queryEvent.php?key=2b8a660b4df88775cb6bcff5b1ccb342&date=' + req.params.month + '/' + req.params.day, {rejectUnauthorized: false})
        .on('complete', function (data) {
        res.json(data);
    });
});

//获取详情
router.get('/service/booksId/:id', function (req, res) {
    rest.get(servername + '/queryDetail.php?key=2b8a660b4df88775cb6bcff5b1ccb342&e_id=' + req.params.id, {rejectUnauthorized: false})
        .on('complete', function (data) {
            res.json(data);
        });
});


router.get('*', function (req, res) {
    res.render('error', {
        title: '404'
    })
});


//错误捕获
process.on('uncaughtException', function (err) {

    logger.info(err);

});

module.exports = router;
