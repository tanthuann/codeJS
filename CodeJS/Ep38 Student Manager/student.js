function Student(name,age,height){
	this.name = name;
	this.age = parseInt(age);
	this.height = parseFloat(height)+'m';

}
module.exports = Student;