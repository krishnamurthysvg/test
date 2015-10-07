var http = require("http");

var server = http.createServer(function(req,res){
	res.end("Hello there");
});

server.listen(8080);
console.log("Web server is listening to port 8080");