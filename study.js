let http=require('http');//
let fs=require('fs');
let path=require('path');
var server=http.createServer(function(req,res){
   var url=req.url.toLowerCase();
   var method=req.method.toLowerCase();
   
   res.end("womennodwwww");//end发送请求，
});
server.listen(4000,function(){
   console.log("服务已启用，请访问127.0.0.1:4000")
})