// && (logical and operator) true is both sides are true
// || (logical or operator) true if atleast one side is true

let temp = 100;

if (temp >= 60 && temp <= 90){
    console.log('It is pretty nice out');
} else if (temp <= 0 || temp >= 120){
    console.log('Do not go outside');
} else {
    console.log('Up to you, do what you want');
}

// challange area

let isGuestOneVegan = false;
let isGuestTwoVegan = false;

// are both vegan? only offer up vegan dishes
// atleast one vegan? make sure to offer some vegan dishes
// else offer anything on the menu

if (isGuestOneVegan && isGuestTwoVegan){
    console.log('Only offer up vegan dishes');
} else if (isGuestOneVegan || isGuestTwoVegan){
    console.log('Make sure to offer some vegan dishes');
} else {
    console.log(' Offer up anything on the menu');
}
