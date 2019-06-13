/**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */

function multiply(arr) {
  var S=1;
  for( var mul of arr){
    S*=mul;
  }
  return S;
}

console.log(multiply([2, 3, 4])); // expect: 24