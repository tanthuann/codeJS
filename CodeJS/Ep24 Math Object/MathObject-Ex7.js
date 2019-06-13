/* 
  Viết hàm trigonim để in ra 3 giá trị sin cos tan của một số nhập vào
*/

function trigonim(number) {
  console.log('Sin('+number+') = ' +Math.sin(number).toFixed(3));
  console.log('Cos('+number+') = ' +Math.cos(number).toFixed(3));
  console.log('Tan('+number+') = ' +Math.tan(number).toFixed(3));
}

trigonim(45);
// Sin(45) = 0.850
// Cos(45) = 0.525
// Tan(45) = 1.619