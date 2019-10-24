function bar(x, y) {
  var z;
  foo(x);
  return [y, z];

  function foo(x){
     y++;
     z = x * y;
    }
}

var y = 5, z;

console.log(bar(20, 5)); 

console.log(bar(25, 6));

// make a pure function `bar(...)` to wrap around `foo(...)`
