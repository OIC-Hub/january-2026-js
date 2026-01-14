let a = 5;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a ** b);
console.log(a % b);

let num = 10;
console.log(num++);
console.log(num);

let num2 = 15;
console.log(++num2);
console.log(num2);

let x = 20;
console.log(x--);
console.log(x);

let y = 25;
console.log(--y);
console.log(y);

let p = 7;
p += 3;
console.log(p);

let q = 12;
q -= 4;
console.log(q);

let r = 6;
let s = 2;
r *= s;
console.log(r);

// do the remaining assignment operators for division (/=), power(**=) and modulus (%=)

console.log(2 + (5 + 2 ** 3) - 6 * 4 / 2);

console.log(5 > 3);
console.log(2 > 3);
console.log(8 < 3);

console.log(4 >= 6);
console.log(2 >= 2);

console.log(6 <= 9);
console.log(6 <= 2);

console.log(2 == 2);
console.log(2 == 4);
console.log(4 == "4");

console.log(2 === 2);
console.log(4 === 5);
console.log(2 === "2");

console.log(4 != 7);
console.log(2 != 2);
console.log(2 != "2");

console.log(2 !== 3);
console.log(2 !== 2);
console.log(2 !== "2");
console.log(2 !== "8");


let p1 = 5;
let p2 = 10;
let p3 = 15;
let p4 = 20;

console.log(p1 < p2 || p3 < p4);
console.log(p1 > p2 || p3 < p4);

console.log(p1 > p2 && p3 < p4);

console.log((p3 < p4) || (p2 < p4) && (p2 > p3 || (p1 < p4)));

console.log(!(p1 < p2));
console.log(!(p2 < p4 && p3 < p4));
console.log(!(p2 < p4) && p3 < p4);

let age = 20;

let sentence = (age >= 18) ? "You are an adult." : "You are a minor.";
console.log(sentence);












