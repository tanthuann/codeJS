/**
 * Viết hàm countDown đếm ngược từ x về 0, mỗi lần đếm cách nhau 1s, trả về promise, promise này resolve sau khi đã đếm xong
 */
function countDown(x) {
  // var end = setInterval(function(){
  //   console.log(x);
  //   if(x===0){
  //     clearInterval(end);
  //     //console.log('Happy New Year')
  //   }
  //   x--;
  // },1000);
  return new Promise(function(resolve,reject){
    var end = setInterval(function(){
    console.log(x);
    if(x===0){
      clearInterval(end);
      resolve();
    }
    x--;
  },1000);
  });
}

function sayHappyNewYear() {
  console.log('Happy new year');
}

countDown(5).then(sayHappyNewYear);