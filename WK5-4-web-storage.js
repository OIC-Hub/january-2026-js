localStorage.setItem('name', 'John');
localStorage.setItem('age', 10);

const arr1 = ["Apple", "Mango", "Banana"];
localStorage.setItem('myArr', JSON.stringify(arr1));

const myObj = {
    name: "Tolu",
    occupation: "Adigunjale"
}

localStorage.setItem('myObj', JSON.stringify(myObj));

let name = localStorage.getItem('name');
console.log(name);

console.log(localStorage.getItem('age'));

const myArray = JSON.parse(localStorage.getItem('myArr'));
console.log(myArray);

console.log("Length of local storage is ", localStorage.length);


localStorage.setItem('occupation', 'Digbolugi');

localStorage.removeItem('occupation');

// localStorage.clear();

async function getUsers(){
    try{
        let url = 'https://jsonplaceholder.typicode.com/users';
        let fetchData = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        };

        let response = await fetch(url, fetchData);
        let data = await response.json();

        console.log(data);

        let users = data.map(function(value, index, array){
            return `
                <div style="margin-bottom: 25px">
                    <p>Name: ${value.name}</p>
                    <p>Email: ${value.email}</p>
                    <p>Username: ${value.username}</p>
                    <p>Company: ${value.company.name}</p>
                    <button onclick="followUser('${value.id}', '${value.name}', '${value.username}')" style="background-color: green; color: white">Follow</button>
                </div>
            `
        })

        document.querySelector('#allUsers').innerHTML = users.join('');
        
    } catch(error){
        alert("Error fetching users");
    }
}


getUsers();

function followUser(id, name, username){
    // alert(username);
    let previousFollowers = [];
    let localStorageFollowers = JSON.parse(localStorage.getItem('followers'));

    if(localStorageFollowers && localStorageFollowers.length > 0){
        previousFollowers = localStorageFollowers;
    }

    previousFollowers.push({
        id: id,
        name: name,
        username: username
    });

    localStorage.setItem('followers', JSON.stringify(previousFollowers));
    alert(`${username} has been followed`)
}
