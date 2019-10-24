// 1. Write two functions, each which return a different number value when called.

const num1 = function(){
    return 5;
}

const num2 = function (){
    return 9;
}
console.log( num1(), num2());

/* 2. Write an `add(..)` function that takes two numbers and adds them and 
returns the result. Call `add(..)` with the results of your two functions 
from (1) and print the result to the console. */

function add(num1, num2) {
    return num1 + num2;
}

console.log(add((num1()),(num2())));

/* 3. Write an `add2(..)` that takes two functions instead of two numbers 
and it calls those two functions and then sends those values to `add(..)` , 
just like you did in (2) above. */

function add2 (func1, func2){
    return add(func1, func2);
}
console.log(add2(num1(), num2()));

/* 4. Replace your two functions from (1) with a single function that takes a 
value and returns a function back, where the returned function will return the 
value when its called. */

function one(){
    return function(){
        return 6;
    };
}

var x = one();
console.log(x());

/* 5. Write an `addn(..)` that can take can array of 2 or more funcions, 
and using only `add2(..)`, adds them together.
Try it with a loop. Try it without a loop (recursion). 
Try it with built in array functional helpers (map/reduce). */


/* 6. Start with an array of odd and even numbers (with some duplicates), 
and trim it down to only have unique values */

var data = [1,2,2,3,4,4];
let uniq = data.filter((v,i) => data.indexOf(v) === i);
console.log(uniq);

/* 7. Filter your array to only have even numbers in it. */

var data = [1,2,2,3,4,4];
let evenNo = data.filter(function(x){
    if (x %2 === 0|| x === 0){
        return x;
    }
})

console.log(evenNo);

/* 8. Map your values to functions, using (4), and pass the new list of functions
 to the `addn(..)` from (5). */

