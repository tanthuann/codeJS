// Given an array of arrays, flatten them into a single array
function flatten(arr) {
    return arr.reduce( (ele1,ele2) => ele1.concat(ele2));
} 

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

flatten(arrays) // ["1", "2", "3", true, 4, 5, 6];