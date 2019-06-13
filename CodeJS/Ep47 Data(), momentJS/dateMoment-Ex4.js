/**
 * Tính số ms chênh lệch giữa 2 date object bất kì
 */
//var moment = require('moment');
function diffMs(a, b) {

  var day1 = new Date(a);
  var day2 = new Date(b);
  return day1.getTime() - day2.getTime();
}
// viết ví dụ để kiểm tra

diffMs('2019/05/30','2019/05/29');