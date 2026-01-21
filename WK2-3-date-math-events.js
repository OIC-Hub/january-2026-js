const today = new Date();
console.log(today);
console.log("Present hour:", today.getHours());
console.log("Present minutes:", today.getMinutes());
console.log("Present seconds:", today.getSeconds());
console.log("Present Day:", today.getDay());
console.log("Present Date:", today.getDate());
console.log("Present Month:", today.getMonth());
console.log("Present Year:", today.getFullYear());

console.log("Present Time:", `${today.getHours()}:${today.getMinutes()}`);

console.log("Exponential", Math.E);
console.log("Natual Log 10", Math.LN10);
console.log("Natual Log 2", Math.LN2);
console.log("Pi", Math.PI);
console.log("Root 1/2", Math.SQRT1_2);
console.log("Root 2", Math.SQRT2);
console.log("Root any value (eg. 16)", Math.sqrt(16));
console.log("Ceil", Math.ceil(4.2));
console.log("Floor", Math.floor(4.8));
console.log("Round", Math.round(4.6));
console.log("Round", Math.round(4.2));
console.log("Power", Math.pow(2, 4));

console.log("Random", Math.random());

function generateRandom(min, max) {
    let randNum = Math.floor(Math.random() * (max - min + 1) + min);
    return randNum;
}

// generate a random num between 5 and 8
let rand5And8 = generateRandom(5, 8);
console.log(rand5And8);


function mouseOver(){
    // alert("Yaaay");
    document.getElementById('changeColor').style.color = 'blue';
}

function mouseOut(){
    document.getElementById('changeColor').style.color = 'black';
}

function keyDown() {
    let value = document.getElementById('inputElem').value;
    console.log("Key down", value);
    
}

function keyUp() {
    let value = document.getElementById('inputElem').value;
    console.log("Key up", value);
    
}

function keyPress() {
    let value = document.getElementById('inputElem').value;
    console.log("Key press", value);
    
}