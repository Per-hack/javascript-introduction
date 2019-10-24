function sum(x, y){
    return x + y;
}

function mult (x, y){
    return x * y;
}

function compose2(fn1, fn2){
    return function comp(){
        var args = [].slice.call(arguments);
        return fn2 (
            fn1 (args.shift(), args.shift()),
            args.shift()
        );
    }
}

var multAndSum = compose2(mult, sum);

console.log(multAndSum(3, 4,5));