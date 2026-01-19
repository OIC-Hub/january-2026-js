console.log(2 + 2 + "Ade");
console.log(2 + "2");

console.log("Ola" + 2 + 2 + "Ade");
console.log(2 + 5 + "Ade" + 9 + 1);

function convertToKobo(naira) {
    let kobo = Number(naira) * 100;
    return kobo;
}

let userInput = prompt("Enter the naira that you want to convert to kobo");

let koboEquivalent = convertToKobo(userInput);

console.log(`The equivalent of ${userInput.toLocaleString()} Naira in Kobo is ${koboEquivalent.toLocaleString()} Kobo`);
document.getElementById('result').innerHTML = `The equivalent of ${userInput.toLocaleString()} Naira in Kobo is ${koboEquivalent.toLocaleString()} Kobo`;