var readlineSync = require('readline-sync');

var passwordGenerator = require('password-generator');

//var someThing = readlineSync.question('Why don\'t you talk something ? ');

//console.log('Hi'+ someThing);

var passWord = passwordGenerator();
console.log(passWord);