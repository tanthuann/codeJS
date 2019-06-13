/*
  Viết hàm rightTriangle để kiểm tra 3 cạnh của một tam giác và cho biết đó có phải là tam giác vuông hay không? 
    Nếu có thì in ra "Yes"
    Không thì in ra "No"
*/

function rightTriangle(a, b, c) {
  if(Math.pow(a,2)+Math.pow(b,2)===Math.pow(c,2)||Math.pow(a,2)+Math.pow(c,2)===Math.pow(b,2)||Math.pow(c,2)+Math.pow(b,2)===Math.pow(a,2))
    return 'Yes';
  return 'No';
}

console.log(rightTriangle(3, 5, 4)); // "Yes"

console.log(rightTriangle(1, 2, 3)); // "No"