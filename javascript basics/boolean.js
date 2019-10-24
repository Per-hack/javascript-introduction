// === - strict equality operator
// == - equality operator 
// !== - strict no equal operator
// != - no equal operator 
// < - less than operator
// > - greater than operator
// <= - less than or equal to operator
// >= - greater than or equal to operator

let temp = 180

if (temp <= 32){
    console.log('It is freezing outside');
}

if (temp >= 110) {
    console.log('It is way too hot outside');
}

// chalange 

let age = 27;

if (age <= 7){
    console.log('Discount');
}
if (age >= 60){
    console.log ('Senior Discount');
}
if (age > 8 && age < 59) {
console.log('Pay$ Pay$ Pay$');
}

let isAccountLocked = true;
let userRole = 'user';

if (isAccountLocked){
    console.log('Account is locked');
}