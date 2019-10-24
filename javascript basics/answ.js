// No: 1

function foo (){
    return 42;
}
function bar(){
    return 10;
}

// No: 2

function add(x, y){
    return x + y
}
add (42, 10);

// No: 3
function add2 (func1, func2){
    return add(func1(), func2());
}
add2(foo, bar);

// No: 4

function foo(v){
    return function(){
        return v;
    }
}
function add2(func1, func2){
    return add(func1(), func2())
}
add2(foo(20), foo(30));

// No: 5
// LOOP

function addn(arr){
    var sum = 0;
    for(var i =0; i<arr.length; i++){
        sum = add2(foo(arr[i]),foo(sum));
    }
    return sum;
}
console.log(addn([10,42,56,73]));

// RECURSION

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

// MAP/ REDUCE

function addn(arr){
    return arr.slice(1)
    .reduce(function(prev, cur){
        return function(){
            return add2(prev, cur);
        };
    }, arr[0])()
}
addn([foo(10),foo(42),foo(56),foo(73)]);

var arr = [10, 42, 56, 73, 15, 2, 98, 7];
arr = arr.map(foo)

// No: 6

var vals = [10, 100, 30, 100, 42, 10, 15];
var distinct = [...new Set(vals.map(num => num))];

// No: 7

var arr = [10, 100, 30, 100, 42, 10, 15];
var arr2 = arr.filter((val) => val %2 === 0);

// No: 8

var arr = [10, 100, 30, 100, 42, 10, 15];
var newValues = arr.map((data) => foo(data))
addn(newValues);
