/**
 * Viết hàm countDown đếm ngược từ x về 0, mỗi lần đếm cách nhau 1s, sau đó hiển thị 'Happy new year'
 */
function countDown(x) {
  var end = setInterval(function(){
    console.log(x);
    if(x===0){
      clearInterval(end);
      console.log('Happy New Year')
    }
    x--;
  },1000);
}

countDown(5);