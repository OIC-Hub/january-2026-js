let sentence1 = "Tolu is going to school";
let splitSentence = sentence1.split(" ");
console.log(splitSentence);
let splitSentence2 = sentence1.split("to");
console.log(splitSentence2);

let upperCaseSentence = sentence1.toUpperCase();
console.log(upperCaseSentence);

let lowerCaseSentence = sentence1.toLowerCase();
console.log(lowerCaseSentence);

let sentence2 = "     Tolu is sad     ";
console.log(sentence2);
console.log(sentence2.length);
let trim1 = sentence2.trim();
console.log(trim1);
console.log(trim1.length);

let trim2 = sentence2.trimStart();
console.log(trim2);
console.log(trim2.length);

let trim3 = sentence2.trimEnd();
console.log(trim3);
console.log(trim3.length);

let num = "11";
let pad1 = num.padStart(4, "0");
console.log(pad1);

let pad2 = num.padEnd(4, "0");
console.log(pad2);

let repeat1 = num.repeat(4);
console.log(repeat1);


