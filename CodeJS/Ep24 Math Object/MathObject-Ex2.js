/* 
  Dùng hàm average tính điểm trung bình 3 môn của một học sinh.
  Làm tròn điểm trung bình
*/

function average(arr) {
  return Math.ceil(arr.reduce((a,b) => a+b)/arr.length);
}

average([8, 8 , 6.75]) // 8