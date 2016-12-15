//入口文件
var server = require('./router/server');
var route = require('./router/route');
var requestHandler = require('./router/requestHandler');

//路由处理函数
var handle = {};
//handle['/'] = requestHandler.start;
handle['/getChapter'] = requestHandler.getChpater;
handle['/getData'] = requestHandler.getData;

//启动http服务器
server.start(route.route,handle);



