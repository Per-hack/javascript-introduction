function userCreator(name, score){
    let newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.increment = function(){
        newUser.score++
    }
    return newUser;
};

let user1 = userCreator('will', 6);
let user2 = userCreator ('Daisy', 4);

user1.increment();
console.log(user1);

user2.increment();
console.log(user2);

