function foo(){
    var count = 0;
    
    return function (){
        return count++;
    };
}

var x = foo();

console.log(x());   // 0
console.log(x());   // 1
console.log(x());   // 2

// another example

function sumX (x){
    return function (y){
        return x + y;
    };
}

var add10 = sumX(10);

console.log(add10(3));  // 13
console.log(add10(14));  // 24

