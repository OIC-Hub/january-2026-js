function greeting(){
    console.log("Hello, welcome to JavaScript functions!");
}

greeting();

function hello(){
    alert("Ina kwana!");
}

function addNumbers(a, b){
    let sum = a + b;
    console.log(sum); 
}

addNumbers(4, 6);

function fullName(firstName, lastName){
    let fname = `${firstName} ${lastName}`;

    return fname;    
}

let person1 = fullName("John", "Doe");
console.log(person1);

function addInput(inputValue){
    console.log(inputValue);
    document.getElementById("display").value += inputValue;
}

