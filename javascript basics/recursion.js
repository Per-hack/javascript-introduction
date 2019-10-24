function sumIter (){
    var sum = 0;
    for (var i = 0; i < arguments.length; i++){
        sum = sum + arguments[i];
    }
    return sum;
}

console.log(sumIter(3, 4, 5));   //12

// another example

function sumRecur(){
    var args = [].slice.call(arguments);
    if (args.length <= 2){
        return args[0] + args[1];
    }
    return (
        args[0] +
        sumRecur.apply(null, args.slice(1))
    );
}

console.log(sumRecur(3, 4, 5));   // 12

// another example

function sumRecur(...args){
    if (args.length <= 2){
        return args[0] + args[1];
    }
    return (
        args[0] +
        sumRecur(...args.slice(1))
    );
}

console.log(sumRecur(3, 4, 5));     //12