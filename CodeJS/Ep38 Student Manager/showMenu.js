// var fs = require('fs');
// var readlineSync = require('readline-sync');
// var index = require('./index.js');
// var show = require('./showStudent.js');

// function showMenu(){
// 	console.log('1. Show all student');
// 	console.log('2. Create a new student');
// 	console.log('3. Save and exit');

// 	var option = readlineSync.question('> ');
// 	switch(option){
// 		case '1':
// 			showStudent();
// 			showMenu();
// 			break;
// 		case '2':
// 			createStudent();
// 			showMenu();
// 			break;
// 		case '3':
// 			saveExit();
// 			//showStudent();
// 			break;
// 		default:
// 			console.log('Wrong input');
// 			showMenu();
// 	}
// }

// module.exports = showMenu;