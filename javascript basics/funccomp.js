function sum (x, y){
    return x + y;
}

function mult (x, y){
    return x * y;
}
// another added composition would be:
// function multAndSum(x, y, z){
   //return sum( mult(x, y), z);
//}
//or multAndSum(3, 4, 5);


// 5 + (3 * 4)

var z = mult(3, 4);
z = sum (z, 5);

// or sum( mult(3, 4), 5);

console.log(z);