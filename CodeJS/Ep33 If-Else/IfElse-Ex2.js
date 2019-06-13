/**
 * Viết hàm isTruthy nhận vào 1 giá trị, trả về true nếu giá trị đó là 1 giá trị truthy, còn không thì trả về false
 * Gợi ý: Nếu không hiểu truthy là gì hãy google với từ khoá `truthy falsy`
 */

function isTruthy(x) {
// Ta có thể viết :
// x = !!x;
// x = t || f;
  if(x)					//js tự ngầm định x là truthy hay falsy.					
    return 1;
  return 0;
}

console.log(isTruthy(true));
console.log(isTruthy('0'));
console.log(isTruthy([]));
console.log(isTruthy(1));