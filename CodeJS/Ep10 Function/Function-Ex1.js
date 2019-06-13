// Bài tập: Viết hàm tính thể tích khối hộp.
// Nhận vào các tham số như dưới, trả về thể tích của khối hộp.

/**
 * Tính thể tích khối hộp
 * https://www.wikihow.com/Calculate-Volume-of-a-Box
 * @param {Number} w Chiều rộng
 * @param {Number} h Chiều cao
 * @param {Number} l Chiều dài
 * @returns {Number} Diện tích
 */
function getBoxVolume(w, h, l) {
  return w * h * l;
}

function getDTHCN(a, b){
  return a*b
}

function getCVHCN(a, b){
  return (a+b)*2;
}

function getDTHT(r){
  return r*r*3.14;
}

function getCVHT(r){
  return r*2*3.14;
}

function getDTHV(a){
  return a*a;
}

function getCVHV(a){
  return a*4;
}


console.log(getBoxVolume(10, 20, 30)); // 6000
console.log(getBoxVolume(4, 5, 6)); // 120