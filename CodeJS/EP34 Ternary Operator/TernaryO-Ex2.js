// Sử dụng ternary operator thay thế cho if else sao cho đoạn code sau không thay đổi logic
function doSomething(a) {
  var b;
  if (a > 0) {
    b = 1;
  } else if (a < 0) {
    b = 2;
  } else {
    b = 3;
  }
  return b;
}

function doSomethingTernary(a) {
  var b;
  return b= (a>0) ? b=1 : (a < 0) ? b=2 : b=3;
}

// Test 2 hàm trên với cùng đầu vào
for(i = -2;i<=2;i++)
  console.log(doSomething(i),doSomethingTernary(i));
