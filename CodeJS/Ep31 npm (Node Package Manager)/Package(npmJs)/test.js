var fs = require('fs');
var readlineSync = require('readline-sync');
var student = [];

function showMenu(){
	console.log('1. Show all student');
	console.log('2. Create a new student');
	console.log('3. Save and exit');
}

function loadData(){
	var readFile = fs.readFileSync('./data.json');
	student = JSON.parse(readFile);
}

//var option = readlineSync.question('> ');
function main() {
	loadData();
	console.log(student);
	//showMenu();
	// switch(option){
	// 	case '1':
	// 		showStudent();
	// 	case '2':
	// 		createStudent();
	// 	case '3':
	// 		saveExit();
	// }
}
