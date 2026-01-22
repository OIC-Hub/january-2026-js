let myBtn = document.getElementById('btn');

myBtn.addEventListener('click', function(){
    alert("Button clicked");
})

let google = document.getElementById('google');
google.addEventListener('click', function(e){
    e.preventDefault();
})

// if statement
let age = 10;
if(age > 18){
    console.log("You are an adult");
}

let form = document.getElementById('myform');
form.addEventListener('submit', function(e){
    e.preventDefault();
    let userAge = document.getElementById('agecheck');
    let display = document.getElementById('result');

    // if else statement
    if(userAge.value >= 18){
        display.innerHTML = "You are an adult";
    } else{
        display.innerHTML = "You are a minor";
    }
})


let gradeform = document.getElementById('myGradeform');
gradeform.addEventListener('submit', function(e){
    e.preventDefault();
    let userGrade = document.getElementById('gradecheck');
    let gradeDisplay = document.getElementById('graderesult');

    // if else if statement
    if(userGrade.value < 0 || userGrade.value > 100){
        gradeDisplay.innerHTML = "Invalid grade";
    } else if(userGrade.value >= 70){
        gradeDisplay.innerHTML = "A";
    } else if(userGrade.value >= 60){
        gradeDisplay.innerHTML = "B";
    } else if(userGrade.value >= 50){
        gradeDisplay.innerHTML = "C";
    } else if(userGrade.value >= 45){
        gradeDisplay.innerHTML = "D";
    } else if(userGrade.value >= 40){
        gradeDisplay.innerHTML = "E";
    } else {
        gradeDisplay.innerHTML = "F"
    }
})



let gradeform2 = document.getElementById('myGradeform2');
gradeform2.addEventListener('submit', function(e){
    e.preventDefault();
    let userGrade2 = document.getElementById('gradecheck2');
    let gradeDisplay2 = document.getElementById('graderesult2');

    switch(true){
        case userGrade2.value < 0 || userGrade2.value > 100:
            gradeDisplay2.innerHTML = "Invalid grade";
            break;
        case userGrade2.value >= 70:
            gradeDisplay2.innerHTML = "A";
            break;
        case userGrade2.value >= 60:
            gradeDisplay2.innerHTML = "B";
            break;
        case userGrade2.value >= 50:
            gradeDisplay2.innerHTML = "C";
            break;
        case userGrade2.value >= 45:
            gradeDisplay2.innerHTML = "D";
            break;
        case userGrade2.value >= 40:
            gradeDisplay2.innerHTML = "E";
            break;
        default:
            gradeDisplay2.innerHTML = "F";
            break;
    }
})