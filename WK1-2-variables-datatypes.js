var firstName = "Niyi";
console.log(firstName);

firstName = 'Tolu';
console.log(firstName);


document.getElementById('myname').innerHTML = firstName;

let lastName = "Sola";
console.log(lastName);
lastName = "Ifeoluwa"
console.log(lastName);

const pi = 3.142;
console.log(pi);

// you cannot change the value of a variable declared with const in the same block
// pi = 10;

console.log(222);


var num1 = 10;
let num2 = 15;
console.log("Num1 is", num1);
console.log("Num2 is", num2);


{
    var num1 = 20;
    let num2 = 30;
    console.log("Num1 is", num1);
    console.log("Num2 is", num2);
    
}

console.log("Num1 is", num1);
console.log("Num2 is", num2);


let sentence = "Olu is a boy";
console.log(typeof sentence);

let age = 15;
console.log(typeof age);

let newSentence = "Ade's boy is 10yrs";
let newSentence2 = 'Ade is "very" stubborn';
let newSentence3 = `Ade's boy is 10yrs and "very" stubborn`;

let adeAge = 12;
let finalSentence = `Ade is ${adeAge} years old`;
console.log(finalSentence);

let alternateSentence = "Ade is " + adeAge + " years old"
console.log(alternateSentence);









