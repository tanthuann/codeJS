/**
 * Sử dụng switch case và map để chuyển đổi array các chữ thành các số tương ứng theo quy tắc:
 * 'A' hoặc 'a' -> 1
 * 'B' hoặc 'b' -> 2
 *  còn lại -> 0
 */

function transform(arr) {
  return arr.map(function(ele){
    switch(ele){
      case 'a':
        return 1;
      case 'A':
        return 1;
      case 'b':
        return 2;
      case 'B':
        return 2;
      default:
        return 0;
    }
  });
}

transform(['A', 'b', 'a', 'B', 'd']);
// [1, 2, 1, 2, 0]