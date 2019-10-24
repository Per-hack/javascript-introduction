function printHello(){
    console.log('Hello');
};
setTimeout( printHello, 3000);
console.log('Hi Again');

let student1 = { 
    name: 'Will', 
    score: 3,
    increment: function (){
        this.score++
    }
};

student1.increment();
console.log(student1.score);

let student2 = { 
    name: 'Tim', 
    score: 6,
    increment: function (){
        this.score++
    }
};

student2.increment();
console.log(student2.score);

//let user2 = { 3;
//user2.name = 'Tim';
//user2.score = 4;
//user2.increment = function (){
    //user2.score++
//}
//};
