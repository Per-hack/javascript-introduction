function doubleIt(v) { return v * 2; }

function transform(arr, fn){
    var list = [];
    for (var i = 0; i<arr.length; i++){
        list[i] = fn(arr[i]);
    }
    return list;
}

console.log(transform([1, 2, 3, 4, 5,], doubleIt));
// [2, 4, 6, 8, 10]

// or (shorter version):

function doubleIt(v){ return v * 2; }

console.log([1, 2, 3, 4, 5].map(doubleIt));
// [2, 4, 6, 8, 10]

