var server = require('./server');
var route = require('./route');
var requestHandler = require('./requestHandlers');

let handle = {};
handle["/"] = requestHandler.start;
handle["/start"] = requestHandler.start;
handle["/upload"] = requestHandler.upload;

server.start(route.route,handle); //将route传递过去,注意这里传递的是一个函数
