let myFollowers = JSON.parse(localStorage.getItem('followers'));
console.log(myFollowers);

let foll = myFollowers.map(function(value, index, array){
    return `
    <div>
        <p>Name: ${value.name}</p>
        <p>Username: ${value.username}</p>
    </div>
    `
})

document.querySelector('#myFollowers').innerHTML = foll.join('')
