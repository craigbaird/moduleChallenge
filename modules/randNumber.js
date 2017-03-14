
//var http = require('http');
var convertUSD = require('./USConversion.js');
//link to app.js

var ranNumb;
///random min = 100 , max 1000000
// minNumb = 100;
// maxNumb = 1000000;
function ranFunc(minNumb,maxNumb) {

  min = Math.ceil(minNumb);
  max = Math.floor(maxNumb);
  ranNumb = Math.floor(Math.random() * (maxNumb - minNumb)) + minNumb;

  return ranNumb;
}



//console.log(add(100,1000000));
//module.exports = add;

//Scott Code
module.exports = ranFunc;
