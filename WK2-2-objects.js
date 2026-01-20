const person = {
    name: "Oga Niyi",
    age: 11,
    complexion: "dark",
    height: "6 inches",
    speak: function(){
        return "Hi there"
    }
}

// dot notation
console.log(person.name);

// square bracker notation
console.log(person['age']);
console.log(person.speak());

person.name = "Ifeoluwa";
console.log(person.name);


