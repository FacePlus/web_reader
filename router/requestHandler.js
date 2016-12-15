//请求处理函数
var exec = require('child_process').exec;
var querystring = require('querystring');
var db = require('./../models/db');
var file = require('./../models/file');

//将一系列请求处理函数通过一个对象来传递，并且使用松耦合的方式将这个对象注入到route()函数中
function getChpater(){
    console.log("Ajax Request handler 'getChpater' was called.");
    var data;
    file.get("chapter",function(data){
        data = data;
        console.log("数据："+data);
    });
   return data;
}

function getData(){
    
}
function start(){
    console.log("Ajax Request handler 'start' was called.");
    var pathname='../public/index.html';
    fs.readFile(pathname,function (err,data){
                res.end(data);
            });
    
}
exports.getChpater = getChpater;
exports.getData = getData;
exports.start = start;