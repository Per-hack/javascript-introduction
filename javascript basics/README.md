# instructions

1. Write two functions, each which return a different number value when called.

answer:  function foo (){
    return 42;
}
function bar(){
    return 16;
}

2. Write an `add(..)` function that takes two numbers and adds them and returns the result. Call `add(..)` with the results of your two functions from (1) and print the result to the console.

 answer:  function add(x. y){
     return x + y
}
add (42, 16);

3. Write an `add2(..)` that takes two functions instead of two numbers and it calls those two functions and then sends those values to `add(..)` , just like you did in (2) above.

answer:   function add2 (func1, func2){
    return add(func1, func2;
}
add2(num1(), num2());

4. Replace your two functions from (1) with a single function that takes a value and returns a function back, where the returned function will return the value when its called.

answer:   function foo(){
    return function(){
        return v;
    }
}
function add2(func1, func2){
    return add(func1(), func2());
}
add2(foo(20), foo(30));

5. Write an `addn(..)` that can takecan array of 2 or more funcions, and using only `add2(..)`, adds them together. Try it with a loop. Try it without a loop (recursion). Try it with built in array functional helpers (map/reduce). 

/// LOOP
anwer:    function addn(arr){
    var sum = 0;
    for(var i =0; i<arr.length; i++){
        sum = add2(foo(arr[i]),foo(sum));
    }
    return sum;
}
addn([10,42,56,73]);

/// RECURSION

function addn(arr){
    if (arr.length <= 2){
        return add2(arr[0], arr[1]);
    }
    return addn([
        function(){
            return add2(arr[0], arr[1]);
        }
    ].concat(arr.slice(2))
    );
}
console.log(addn([foo(10), foo(42), foo(56), foo(73)]));
// without a loop

6. Start with an array of odd and even numbers (with some duplicates), and trim it down to only have unique values



7. Filter your array to only have even numbers in it.



8. Map your values to functions, using (4), and pass the new list of functions to the `addn(..)` from (5).


