var express = require('express');
var router = express.Router();
var path = require('path');
var request = require('request');
var redirect = require('../config');

/* GET home page. */
router.route("/")
    .get(function (req, rep, next) {
        rep.send(" server is running");
    });

router.route('/detailData')
    .get(function (req, rep, next) {
        // req.params.xxxxx 从path中的变量
        // req.query.xxxxx 从get中的?xxxx=中
        // req.body.xxxxx 从post中的变量

        const dataFormId = req.params.dataFormId;
        rep.setHeader('Content-Type', 'application/json;charset=utf-8');
        // rep.setHeader("Access-Control-Allow-Origin", "*");//已经统一放到app.js中统一设置
        rep.sendFile(path.resolve(__dirname, `../json/detailData.json`));
    });

var setRedirect = function (options, cb) {
  request(options, function (error, response, body) {
    cb(body);
  });
}

var reqPath = redirect.path;
var url = redirect.url;

for(let i = 0; i< reqPath.length; i ++) {
  console.log(reqPath[i]);
  router.route(reqPath[i]).get(function (req, rep, next) {
    setRedirect({
      headers: req.headers,
      uri: url + req.url,
      method: 'get',
    }, function (body) {
      rep.json(body && JSON.parse(body));
    })
  });
  router.route(reqPath[i]).post(function (req, rep, next) {
    setRedirect({
      headers: req.headers,
      uri: url + req.url,
      method: 'post',
      body: JSON.stringify(req.body)
    }, function (body) {
      rep.json(body && JSON.parse(body));
    })
  });

  router.route(reqPath[i]).delete(function (req, rep, next) {
    setRedirect({
      headers: req.headers,
      uri: url + req.url,
      method: 'delete',
      body: JSON.stringify(req.body)
    }, function (body) {
      rep.json(body && JSON.parse(body));
    })
  })
}

module.exports = router;
