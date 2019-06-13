/**
 * Viết hàm subtractDays trả về 1 ngày trong quá khứ cách ngày được truyền vào n ngày
 */

var moment = require('moment');   // install npm moment
function subtractDays(date, n) {
  return (moment(date).subtract('days',n)).utcOffset(7);
}

subtractDays(new Date(), 3);