//测试superAgent框架
let superagent = require('superagent');


/**
 * 可以通过set设置header
 * 可以通过send设置post传递的内容
 */
superagent
    .get('http://www.zwdu.com/book/16684/')
    .end(function(req,res){
        if (res.ok) {
            console.log(res.text)
        } else {
            console.log('Oh no! error ' + res.text);
        }
    });
