/**
 * Sử dụng vòng lặp for...in để in ra tất cả các key trong object sau, in ra cả các key của các nested object (object con lồng bên trong object lớn)
 * Gợi ý: đây là bài tập khó, bạn nên tìm hiểu về recursive trước
 */

var apartment = {
  bedroom: {
    area: 20,
    bed: {
      type: 'twin-bed',
      price: 100
    }
  }
};
function apart(apartment){  
  for( var key in apartment){
    console.log(key); 
    if(typeof(apartment[key])!==typeof(apartment))
      continue;
    return apart(apartment[key]);
    }
  }
  //console.log(apartment.bedroom.bed.type);

apart(apartment);
/**
 * Kết quả mong muốn:
 * bedroom
 * area
 * bed
 * type
 * price
 * Chú ý: không cần hiển thị ra đúng thứ tự như trên
 */
