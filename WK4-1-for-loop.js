for(let i = 1; i <= 10; i++){
    console.log(i);
}

// calculating the sum of the first 10 numbers
let sum = 0;
for(let i = 1; i <= 10; i++){
    sum += i;
}

console.log('Sum is', sum);

let sentence = "";
for(let i = 1; i <= 100; i++){
    if(i % 2 === 1){
        sentence += `${i} is odd<br>`
    } else{
        sentence += `${i} is even<br>`
    }
}

document.querySelector('#sentence').innerHTML = sentence;

const myArr = [1, 24, 88, 7];
for(let i = 0; i < myArr.length; i++){
    console.log(myArr[i]);
}

let sum1 = 0;
for(let i = 0; i < myArr.length; i++){
    sum1 += myArr[i];
}

console.log('Sum1 is', sum1);
