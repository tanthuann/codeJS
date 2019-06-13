mocha.setup('bdd');
var expect = chai.expect;

// Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr) {
	return newArr = arr.filter(ele => ele)
}

describe('first', function () {
	it('case 1', function () {
    expect(evensOnly([3, 6, 8, 2])).to.eql([6, 8, 2]);
  });
  it('case 2', function () {
    expect(evensOnly([1, 5, 5])).to.eql([]);
  });
});

mocha.run();