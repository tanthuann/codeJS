/**
 * Viết hàm diff trả về số ngày chênh lệch giữa 2 ngày bất kì
 */
var moment = require('moment')

function diff(fromDate, toDate) {
  var dayF = moment(fromDate);
  return dayF.from(toDate);
}

var start = new Date('2018/05/17');
var end = new Date('2018/010/17');

console.log(diff(start, end));


