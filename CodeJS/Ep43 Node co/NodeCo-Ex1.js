/**
 * Sử dụng node co + axios để tải về các đường link sau theo 2 cách:
 */
var urls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3',
  'https://jsonplaceholder.typicode.com/todos/4',
  'https://jsonplaceholder.typicode.com/todos/5'
];

// Cách 1: Sử dụng vòng lặp for

// Cách 2: Sử dụng array.map
// Gợi ý: Có thể yield 1 array các Promise
var co = require('co');
var axios = require('axios');

function readLink(path){
  return new Promise(function(resolve,reject){
    axios.get(path)
      .then(function(response){
        resolve(response);
      })
      .catch(function(){
        reject(error);
      });
  });
}
// CÁCH 1: MAP AND CO

// co(function*() {
//   var infoLink = yield urls.map(function(path){
//     return readLink(path);
//   });
//   return infoLink;
// })
//   .then(function(infoLink) {
//     console.log(infoLink);
//   })
//   .catch(function(error) {
//     console.log(error);
//   })

// CÁCH 2 : FOR AND CO.WRAP

var readLinkCoWrap = co.wrap(function*(urls) {
  for(var i=0 ; i<urls.length ; i++){
    urls[i] = readLink(urls[i]);
  } 

  // for(var url of urls){       // for..of không được vì nó không thay đổi phần tử trong mảng
  //   url = readLink(url);
  // }

  return yield urls;
});

readLinkCoWrap(urls)
  .then(function(info){
    console.log(info);
  })
  .catch(function(error){
    console.log(error);
  });
