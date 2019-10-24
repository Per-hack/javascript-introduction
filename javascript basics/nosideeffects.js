function bar (x,y,z){
    foo (x);
    return [y,z];

    function foo (x){
        y = y * x;
        z = z * x;
    }
}

bar (5,2,3);
// type/ copy direct into the console
bar (5,10,15);
