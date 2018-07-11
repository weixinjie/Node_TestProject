//路由模块
function route(handle,pathname,request,response) {
    if (typeof handle[pathname] === 'function') {
        return handle[pathname](request , response);
    }else{
        console.log('处理函数没有找到...'+pathname + '------ '+typeof handle[pathname]);
        return '404 Not found';
    }
}

exports.route = route;