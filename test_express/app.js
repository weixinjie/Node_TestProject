var express = require('express');
var app = express();
var birds = require('./birds');

app.use('/static', express.static('public')); //添加中间件可以静态访问文件了  http://localhost:8888/static/a.JPEG
app.use('/static', express.static('image')); //可以多次添加文件，并且都可以通过/static这个虚拟的路径来读取文件

/**
 * 添加路由中间件,这样就可以将路由的处理逻辑放到外面了
 */
app.use('/birds',birds);

app.get('/', function (req, res) {
    res.send('hello word');
});

/**
 * 可以像中间件一样定义多个处理函数，但是中间需要加next函数
 */
app.get('/next', function (req, res, next) {
    console.log('first next');
    next();
}, function (req, res) {
    console.log('second next');
    res.send('this is second next');
});


/**
 * 路由 app.route()
 * 这样可以将所有关于/book相关的路由全部集中到这里来
 */
app.route('/book')
    .get(function (req,res) {
        res.send('book路由的get方式');
    })
    .post(function (req ,res) {
        res.send('book路由的post方法');
    })
    .put(function (req,res) {
        res.send('book路由的post方式');
    });


var server = app.listen(8888, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('服务启动  http://%s:%s', host, port);
});

