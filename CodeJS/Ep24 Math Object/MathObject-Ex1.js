/* 
  Dùng hàm powerup tính bình phương các số chia hết cho 2 trong mảng truyền vào
*/

function powerup(arr) {
  return arr.reduce((a,b) => a + Math.pow(b,2),0);
}

powerup([0, 3, 6, 7, 4]); // [0, 3, 36, 7, 16] 
