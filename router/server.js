var http = require('http');
var url = require('url');
var fs = require('fs');

function start(route,handle){
    http.createServer(function(request,response){
        var pathname = url.parse(request.url).pathname;
        if(pathname=='/'){
            console.log("******************************");
            var path='../public/index.html';
            fs.readFile('./public/index.html',function (err,data){
		
                response.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
                response.write(data);
                response.end();
            });
        }else{
            route(handle,pathname);

            response.writeHead(200,{"Content-Type":"text/plain"});
            response.end();
        }
        
    }).listen(9001);
}

exports.start = start;