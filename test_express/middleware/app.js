//演示中间件的使用情况
var express = require('express');
var app = express();


//------------------应用级的中间件
app.use(function (req, res, next) {
    console.log('没有指定请求路径的中间件,应用的每个请求都会执行这个中间件');
    next();
});

app.use('/user/:id', function (req, res, next) {
    console.log('request type', req.method + "所有指向user/id的请求都会执行这里");
    next();
});

app.get('/user/:id', function (req, res, next) {
    console.log('request type', req.method + "所有指向user/id的get 请求都会执行这里");
    res.send('USER');
});


/**
 * 如果有多个路由需要协调的话  需要使用next('route')来跳过剩余的中间件
 *
 * 注意:接下来的两个函数与位置没有关系,都会先执行第一个
 * begin
 */
app.get('/people/:id', function (req, res, next) {
    if (req.params.id == 0) {
        next('route');
    } else if(req.params.id == 250){
        next(new Error("敢查询520 你麻痹"))  //如果希望触发下面的错误处理中间件 则需要这么干
    }else {
        next();
    }
}, function (req, res, next) {
     res.send('我是中间件的内容');

});

app.get('/people/:id', function (req, res, next) {
    res.send('我是路由的内容');
});
/**
 * end
 */



//------------------路由级的中间件
/**
 * 路由级别的中间件绑定的对象是express.Router()
 */
var router = express.Router();
router.use(function (req,res,next) {
    console.log('路由级别的中间件Data ',Date.now());
    next();
});

router.use('/boy/:id',function (req,res,next) {
    console.log('Request Url',req.originalUrl);
    next();
},function (req,res,next) {
    console.log('Request Url',req.method);
    next();
});

//将路由挂载至应用
app.use('/',router);


//------------------错误处理的中间件
app.use(function (err,req,res,next) {
    console.error(err.stack);
    res.status(500).send(err.message);
});


//------------------内置的中间件

var server = app.listen(8888, function (req, res) {

});