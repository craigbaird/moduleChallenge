//get the ranNumb and turn into USA string value
// var http = require('http');
// var cat = require('M1.js');

function convertFunc(ranNumb) {
  //var value = ranNumb;

  var balance = '$' + ranNumb.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  //console.log(num);
  return balance;
 }



  //return someUSD;



// console.log(ranNumb);

//var scottsVar = 10;

//Scott Code
module.exports = convertFunc;
