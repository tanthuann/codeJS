/**
 * Điểm khác nhau giữa 2 vòng lặp for...of và for...in, viết code ví dụ
 */

//for...of lặp các phần tử trong mảng sẵn có/
//for...in lặp các dữ liệu key,name[key] trong object sẵn có.

var crush = {
  name: 'vhnd',
  age: 20
};

for( var key in crush){
  console.log(key,crush[key]);
}

var crush = ['VHND','28','1.5m'];
for( var cr of crush){
  console.log(cr);
}