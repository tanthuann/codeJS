/* 
  Viết hàm lengthObj để in ra độ dài của một đối tượng
*/

function lengthObj(obj) {
  var count=0;
  for(var key in obj){
    count++;
  }
  return count;
  //return Object.keys(obj).length;
}

var student = {
  name: "Jerry", 
  age: 14,
  role: "student"
}

lengthObj(student); // length: 3