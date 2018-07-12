var express = require('express');
var router = express.Router();

//指定该路由使用的中间件,此时不管是访问/ 还是访问about都会调用这个函数
router.use(function (req,res,next) {
    console.log('当前时间Time ',Date.now());
    next();
});

router.get('/',function(req,res){
    res.send('此时访问的是主页');
});

router.get('/about',function (req,res) {
    res.send('当前访问的是about页面');
});

module.exports = router;