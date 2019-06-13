var fs = require('fs');
var readlineSync = require('readline-sync');
var Student = require('./student');
//var showMenu = require('./showMenu.js');
//var showStudent = require('./showStudent.js');

var students = [];
function loadData(){
	var readFile = fs.readFileSync('./data.json',{encoding: 'utf8'});
	students = JSON.parse(readFile);
}

function showMenu(){
	console.log('1. Show all student');
	console.log('2. Create a new student');
	console.log('3. Save and exit');

	var option = readlineSync.question('> ');
	switch(option){
		case '1':
			showStudent();
			showMenu();
			break;
		case '2':
			createStudent();
			showMenu();
			break;
		case '3':
			saveExit();
			//showStudent();
			break;
		default:
			console.log('Wrong input');
			showMenu();
	}
}
function showStudent(){
			for(var student of students)
				console.log(student.name,student.age,student.height);
		}


function createStudent(){
	var name = readlineSync.question('Name ? ');
	var age = readlineSync.question('Age ? ');
	var height = readlineSync.question('Height ? ');
	var createStu = new Student(name,age,height);
	students.push(createStu);
}

function saveExit(){
	students = JSON.stringify(students);
	fs.writeFileSync('./dataDid.json',students);
	console.log('Saved');
}

function main() {
	loadData();
	//showStudent;
	showMenu();
}
main();

//module.exports = index;
