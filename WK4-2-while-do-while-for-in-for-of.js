let i = 1;
while(i <= 10){
    console.log(i);
    i++;
}

let sum = 0;
let j = 1;
while(j <= 10){
    sum += i;
    j++;
}

console.log('Sum is', sum);

let k = 11;
do{
    console.log(k);
    k++;
} while(k <= 10);


const person = {
    firstName: "Tolu",
    lastName: "Ayo",
    age: 11,
    occupation: "Civil Servant"
};

for(let i in person){
    console.log(i);
    console.log(person[i]);
}

const myArr = [1, 45, 67, 99];
for(let i in myArr){
    console.log(i);
    console.log(myArr[i]);
}

const newArrr = [2, 5, 7];

let newsum = 0;
for(let i of newArrr){
    console.log(i);
    newsum += i;
}
console.log('Sum', newsum);

const numArray = [2, 11, 90, 87, 23, 1, 19, 67, 78, 11, 48];
let oddSum = 0;
let evenSum = 0;
for(let i of numArray){
    if(i % 2 === 1){
        oddSum += i;
    } else{
        evenSum += i;
    }
}

console.log("Odd Sum", oddSum);
console.log("Even Sum", evenSum);

let finalArray = [1, 2, 3, [5, 8, 11], 2, 4];

let arrSum = 0;
for(let i = 0; i < finalArray.length; i++){
    if(i === 3){
        for(let j of finalArray[i]){
            arrSum += j;
        }
    }
}

console.log("Arr Sum", arrSum);

for(let i = 1; i <= 10; i++){
    if(i === 6){
        continue;
    }
    console.log(i);
}

for(let i = 1; i <= 10; i++){
    if(i === 6){
        break;
    }
    console.log(i);
}
