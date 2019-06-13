mocha.setup('bdd');
var expect = chai.expect;

function has(array, value) {
  // sử dụng vòng lặp for...of viết hàm has để kiểm tra xem array có tồn tại 1 giá trị xác định hay không
  // Tham số:
  //	- array: mảng cần kiểm tra
  //	- value: giá trị cần kiểm tra xem có tồn tại trong array không
  // Return:
  //	- true nếu có tồn tại
  //	- false nếu không tồn tại
  for(var ele of array){
    return ele===value;
  }
}

describe('has', function () {
	it('should return true if value exists', function () {
    expect(has([1,2,3], 1)).to.equal(true);
  });
  
  it('should return false if value does not exist', function() {
  	expect(has([1,2,3], 4)).to.equal(false);
  });
});

mocha.run();