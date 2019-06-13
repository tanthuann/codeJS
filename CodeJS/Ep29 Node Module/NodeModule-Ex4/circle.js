function Circle(x,y,radius){
  this.x = x;
  this.y = y;
  this.radius = radius;
};

Circle.prototype.isOverlapped = function(oneCircle){
  var lengthTwoCircleCenter = Math.sqrt(Math.pow(this.x-oneCircle.x,2)+Math.pow(this.y-oneCircle.y,2));
  //console.log(lengthTwoCircleCenter);
  if(this.radius+oneCircle.radius < lengthTwoCircleCenter)
    return 'Hai đường tròn không giao nhau';
  if(Math.abs(this.radius-oneCircle.radius) > lengthTwoCircleCenter)
    return 'Hai đường tròn đè lên nhau';
  if(this.radius+oneCircle.radius === lengthTwoCircleCenter)
    return 'Hai đường tròn tiếp xúc tại 1 điểm';
};

module.exports = Circle;