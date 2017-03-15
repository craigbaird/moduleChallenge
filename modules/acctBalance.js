
//call the randNumber.js and USConversation.js

var ranFunc = require('./randNumber.js');
var convertFunc = require('./USConversion.js');

function acctBal() {

var randNumb = randFunc(100,1000000);
var currNumb = convertFunc(randNumb);

  return ("Account Blance: \n" +currNumb);

}



//exports
// module.exports = {
//     ranFunc: function() {
//     },
//     convertFunc: function() {}
// };

exports.ranFunc = function() {};
exports.converFunc = function() {};

// module.exports = ranFunc;
// module.exports = convertFunc;
