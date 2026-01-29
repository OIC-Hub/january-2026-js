const myArr = ["Mango", "Banana", 10, "Potato", "Egg"];
console.log(myArr[0]);
console.log(myArr[2]);

myArr[3] = "Orange";
console.log(myArr[3]);

console.log("Length", myArr.length);
console.log(Array.isArray(myArr));

let egg = 1;
console.log(Array.isArray(egg));

console.log(Object.keys(myArr));
console.log(Object.values(myArr));
console.log(Object.entries(myArr));

const myArr1 = [1, 2, 3, 4, 5];

// fill will modify the original array
console.log(myArr1.fill("x"));
console.log(myArr1.join("++"));

const myArr2 = [2, 56, "Zebra"];
myArr2.push(10);
console.log(myArr2);

myArr2.push(11, 58, 20);
console.log(myArr2);

let deleted = myArr2.pop();
console.log(myArr2);
console.log(deleted);

let deleted2 = myArr2.shift();
console.log(myArr2);
console.log(deleted2);

myArr2.unshift(111, "Carrot");
console.log(myArr2);

const myArr3 = [10, 23, 99, "Sumonu"];
myArr3.splice(2, 1, 90, "Sade", "88");
console.log(myArr3);

const myArr4 = [100, 123, 909, "Igwe"];
myArr4.splice(2, 2, 10, "Lawal", "Fatai");
console.log(myArr4);

const myArr5 = [1, 2, 3, 4];
console.log(myArr5.includes(9));
console.log(myArr5.includes(4));
console.log(myArr5.includes("2"));

const myArr6 = [100, 101, 102, 103, 104, 109];
const extracted = myArr6.slice(0, 3);
console.log(extracted);

const myArr7 = ["A", "B", "C"];
const myArr8 = myArr7.concat([2, 10]);
console.log(myArr8);
console.log(myArr7);

const myArr9 = myArr7.concat([10, [12, 13, 14]]);
console.log(myArr9);
















