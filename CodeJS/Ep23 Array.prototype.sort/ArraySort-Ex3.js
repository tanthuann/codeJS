/**
 * Sort an array from shortest string to longest
 */
function lengthSort(arr) {
  return arr.sort((ele1,ele2) => ele1.length - ele2.length );
}

lengthSort(["dog", "wolf", "by", "family", "eaten"]) 
// ["by", "dog", "wolf", "eaten", "family"] 
// Gợi ý: độ dài của 1 string = string.length, thử chạy "abc".length