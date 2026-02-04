const arr1 = [11, 45, 89, 90];

let someCheck = arr1.some(function(value, index, array){
    // console.log(value);
    // console.log(index);
    // console.log(array);
    return value > 50;
});

console.log(someCheck);

let everyCheck = arr1.every(function(value, index, array){
    return value > 50;
});
console.log(everyCheck);

const students = [
    {
        name: "Korlu",
        balance: 50
    },
    {
        name: "Tawa",
        balance: 0
    },
    {
        name: "Ramadan",
        balance: 0
    },
    {
        name: "Sade",
        balance: 150
    }
];

let debtors = students.some(function(value, index, array){    
    return value.balance > 0
});
console.log(debtors);

const arr2 = [11, 45, 89, 90];

let findCheck = arr2.find(function(value, index, array){
    return value > 50;
});

console.log(findCheck);


let sum = arr2.reduce(function(total, value, index, array){
    return total + value;
}, 0);

console.log(sum);

const myArray = [10, 13, 67, 45, 88];

let total = 0;
myArray.forEach(function(value, index, array){
    total += value;
});

console.log(total);


let arrayElem = document.querySelector('#arrayElem');
myArray.forEach(function(value, index, array){
    arrayElem.innerHTML += `<h3 class="red">${value}</h3>`;
});

console.log(total);

let names = ['Tayo', 'Segun', 'Ife'];
let mapCheck = names.map(function(value, index, array){
    return `<h4>${value}</h4>`;
})

console.log(mapCheck);

document.getElementById('names').innerHTML = mapCheck.join('');


const people = [
    {
        name: "Jagunlabi Michael",
        age: 11,
        occupation: 'Jagun Jagun',
        image: 'on.jpg'
    },
    {
        name: "Abdulhakeem Wasiu",
        age: 12,
        occupation: 'Agbe',
        image: 'on.jpg'
    },
    {
        name: "Akeem Tunde",
        age: 111,
        occupation: 'Musician',
        image: 'off.jpg'
    },
    {
        name: "Deborah Tafa",
        age: 141,
        occupation: 'Oga Wife',
        image: 'on.jpg'
    },
    {
        name: "Sogo Ogunmepon",
        age: 12,
        occupation: 'Civilian',
        image: 'off.jpg'
    },
    {
        name: "Tobi Alao",
        age: 171,
        occupation: 'Footballer',
        image: 'on.jpg'
    },
    {
        name: "Niyi Wasiu",
        age: 141,
        occupation: 'Engineer',
        image: 'on.jpg'
    },
    {
        name: "Luqman Bello",
        age: 11,
        occupation: 'Cobbler',
        image: 'off.jpg'
    }
];

let displayPeople = people.map(function(value, index, array){
    return `
        <div class="eachPerson">
            <img src="images/${value.image}">
            <p>Name: ${value.name}</p>
            <p>Age: ${value.age}</p>
            <p>Occupation: ${value.occupation}</p>
        </div>
    `
});

document.querySelector('#people').innerHTML = displayPeople.join('')





