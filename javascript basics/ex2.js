function foo(x, y){
    return function (){
        return x + y;
    }
}

var x = foo(3, 4);

console.log(x());      // 7
console.log(x());      // 7

// Define `foo(..)` so that it produces a function which remembers only the first
// two arguments that were passsed to `foo(..)`, and always adds them together.