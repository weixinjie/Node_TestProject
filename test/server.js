var http = require('http'); //请求http模块
var url = require('url');  //这个模块用来解析url

function  start(route,handle) {
    function onResponse(request,response) {
        let pathName = url.parse(request.url).pathname;
        route(handle,pathName,request, response);
    }

    http.createServer(onResponse).listen(8888);
}

exports.start = start; //导出这个module