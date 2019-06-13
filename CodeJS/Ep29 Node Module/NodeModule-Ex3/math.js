var math = {
  add: function(a, b) {
    return a + b;
  },
  sum: function(arr){
    return arr.reduce((a,b) => a+b,0);
  }
};

module.exports = math;