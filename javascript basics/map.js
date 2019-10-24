var data = [1,2,3]; 
// data.map(function(num){
    // return num * 2;
// })

// data.filter(function(num){
   // return num >1;
// })

data.reduce(function(acc, value){
    return acc + value;
}, 0)