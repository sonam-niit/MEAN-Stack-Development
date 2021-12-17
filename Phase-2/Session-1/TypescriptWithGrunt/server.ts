var sys = require("sys");
var my_http= require('http');

my_http.createServer(function(request,response){

    sys.puts("Hello World");

    response.writeHeader(200,{"Content-Type":"text/plain"});
    response.write("Hello to everyone");
    response.end();
}).listen(8080,function(){console.log("server started")})