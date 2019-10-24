// Function - input (parameters), code, output(return value)
let greetUser = function (){
    console.log('Welcome user!');
}

greetUser ();
greetUser ();

let square = function (num){
    let result = num * num;
    return result;
}

let value = square(9);
let otherValue = square(1000000);

console.log(value);
console.log(otherValue);

// Challange Area
// Convert Fahrenheit to Celsius
// (Fahrenheit - 32) * 5/9

let convertFahrenheitToCelsius = function(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
return celsius
}

let tempOne = convertFahrenheitToCelsius(32);
let tempTwo = convertFahrenheitToCelsius(68);

console.log(tempOne);
console.log(tempTwo);