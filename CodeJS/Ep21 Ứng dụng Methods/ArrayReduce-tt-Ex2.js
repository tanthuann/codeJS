// Count the occurrences of each element inside an array using reduce
function countOccurrences(arr) {
  var result = arr.reduce(function(obj, ele) {
    console.log(obj[ele],ele);
   if( obj[ele] !== undefined){
     obj[ele]++;
   }
   else{
     obj[ele] = 1;
   }
  return obj;
  },{});
  return result;
}


countOccurrences(['a', 'b', 'c', 'b', 'a']);
// { 
//   a: 2, 
//   b: 2, 
//   c: 1 
// }