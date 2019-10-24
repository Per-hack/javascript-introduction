// Impure

function foo(x) {
    y = x * 2;
    z = x * 3;
}

var y, z;

foo(5);

console.log (y);
console.log (z);

// Impure

function foo(x){
    y = y * x;
    z = y * x;
}

var y = 2, z = 3;

foo(5);

console.log(y);
console.log(z);

foo (5);

console.log(y);
console.log(z);



