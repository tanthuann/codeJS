mocha.setup('bdd');
var expect = chai.expect;

// Given a list of students, filter out the female ones
function filterOutFemales(members) {
	return newMembers = members.filter(ele => ele.gender != 'female');
}

describe('first', function () {
	var members = [
  	{ name: 'Lan', gender: 'female' },
    { name: 'Linh', gender: 'female' },
    { name: 'Trung', gender: 'male' },
    { name: 'Peter', gender: 'gay' }
  ];
	it('case 1', function () {
    expect(filterOutFemales(members)).to.eql(
    	[	
      	{ name: 'Trung', gender: 'male' },
        { name: 'Peter', gender: 'gay' }
      ]
    );
  });
});

mocha.run();