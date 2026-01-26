let sentence1 = "My name is Oga Niyi.";
console.log("Length:", sentence1.length);
console.log("CharAt:", sentence1.charAt(0));
console.log("CharCodeAt:", sentence1.charCodeAt(0));

let sentence2 = "I am very nice.";
let sentence3 = "I am a boy";
let joinSentence = sentence1.concat(" ", sentence2, " ", sentence3);
console.log("Concat:", joinSentence);

console.log("Index Of:", sentence1.indexOf("i"));

// when the character does not exist, the index returns -1
console.log("Index Of:", sentence1.indexOf("h"));

console.log("Last Index Of:", sentence1.lastIndexOf("i"));
console.log("Index Of:", sentence1.lastIndexOf("e"));
console.log("Last Index Of:", sentence1.lastIndexOf("e"));


let sentence4 = "Oga Niyi is very good and nice";
// replace is case-sensitive, oga Niyi is not the same as Oga Niyi
let replaceSentence = sentence4.replace("Oga Niyi", "Korede");
console.log(replaceSentence);

// replace does not modify the original variable
console.log(sentence4);

// to make to be case-insensitive, use regex (regular expression)
let replaceSentence2 = sentence4.replace(/oga nIyi/i, "Korede");
console.log(replaceSentence2);

// replace only replaces the first occurence
let sentence5 = "I am good and I am also nice."
let replaceSentence3 = sentence5.replace("am", "was");
console.log(replaceSentence3);

// to replace all occurence, use replaceAll
let replaceSentence4 = sentence5.replaceAll("am", "was");
console.log(replaceSentence4);

// another way to replace all is to use regex with replace
let replaceSentence5 = sentence5.replace(/am/g, "was");
console.log(replaceSentence5);

let sentence6 = "I am going out";
let slice1 = sentence6.slice(2);
console.log(slice1);
let slice2 = sentence6.slice(-6);
console.log(slice2);
let slice3 = sentence6.slice(2, 7);
console.log(slice3);
let slice4 = sentence6.slice(-7, -2);
console.log(slice4);

// substring works as slice, just that, it cannot accept negative
let substring1 = sentence6.substring(2);
console.log(substring1);
let substring2 = sentence6.substring(-6);
console.log(substring2);
let substring3 = sentence6.substring(2, 7);
console.log(substring3);

// the second argument of substr is length and not end
let substr1 = sentence6.substr(2, 7);
console.log(substr1);
