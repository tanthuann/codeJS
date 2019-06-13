var a = 1;

function foo() {
  var a = 2;
  return a;
}

function bar() {
  a = 2;
  return a;
}

foo();
console.log(a); // Kết quả?
bar();
console.log(a); // Kết quả?
// Giải thích vì sao kết quả dòng 14 lại khác 16 bằng tiếng Việt hoặc tiếng Anh
// Hàm foo() đã khai báo biến a là local khi return thì giá trị của hàm foo() bằng 2 chứ không thay đổi a.
// Hàm bar() thay đổi a gobal không cần return vẫn thay đổi a = 2 được