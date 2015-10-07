var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
	var url = req.url;
	var filePath = url.substring(1);
	loadFile(filePath,res);
});
function loadFile(filePath,res){
	fs.readFile(filePath,function(err,data){
		if(err)
			res.end("File not found " + filePath);
		else
			res.end(data);
	});
}
server.listen(8080);
console.log("Web Server running on 8080");