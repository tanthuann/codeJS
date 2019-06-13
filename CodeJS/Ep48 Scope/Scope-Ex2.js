var a = 1;

var b = {
  a: 2,
  foo: function() {
    console.log(this.a);
  }
};

b.foo();

var fooCopy = b.foo;
fooCopy();
// Chạy code và giải thích vì sao kết quả dòng 10 khác dòng 13
// b.foo() thì nó phải gọi lại a trong object b và chạy foo()
// b.foo chỉ gọi foo() không gọi a: 2

