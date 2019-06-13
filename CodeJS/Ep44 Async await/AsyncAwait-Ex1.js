var fs = require('fs');
var axios = require('axios');

// fs.readFile( './data.json',  { encoding: 'utf8'},  function(err, data) {
//     console.log('Data loaded from disk', data);

//     axios.get('https://jsonplaceholder.typicode.com/todos/1')
//       .then(function(res) {
//         console.log('Data downloaded from url', res.data);
//       });
//   }
// );

/**
 * Sử dụng async await kết hợp với Promise để viết lại đoạn code trên. Gợi ý: Viết lại 1 async function làm 2 việc trên và chạy thử
 */
var path = './data.json';
function read(path){
  return new Promise(function(resolve,reject){
    fs.readFile(path,{ encoding: 'utf8'}, function(arr, data){
      console.log('Data loaded from disk', data);

    axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(function(response) {
        resolve(response.data);
      })
      .catch(function(err){
        reject(err);
      });
    })
  })
}

async function run(){
  var data = await read(path);
  return data;
}

run()
  .then(function(data){
    console.log(data);
  })
  .catch(function(err){
    console.log(err);
  });
