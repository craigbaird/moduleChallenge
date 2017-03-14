var http = require('http');
// var cat = require('./modules/M1.js');

//Scott Code
var rand = require("./modules/acctBalance.js");
//console.log(rand(1,9));

//specity for
http.createServer(function(request, response){


  response.writeHead(200);
  response.write(toString(rand));
  response.end();
}).listen(3000);

console.log("Listening");
