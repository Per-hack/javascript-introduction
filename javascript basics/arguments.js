let add = function (a, b,c) {
    return a + b + c;
}

let result = add(10, 1, 5);
console.log(result);

// Default arguments
let getScoreText = function(name = 'anonymous', score = 0){
    return `Name: ${name} - score: ${score}`;
}

let scoreText = getScoreText('chics', 23);
console.log(scoreText);

var city = 'Paris';
console.log(`I Love ${city}`);

let getTip = function (total, tipPercent = .1){
    let percent = tipPercent * 100;
    let tip = total * tipPercent;
    return `A ${percent}% tip on $${total} would be $${tip}`;
}

let tip = getTip(60000);
console.log(tip);

let multiply = function (a, b) {
    return a * b;
}
let result = multiply (12, 7);
console.log(result);
