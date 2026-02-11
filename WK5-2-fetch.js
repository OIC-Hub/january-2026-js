let url = 'https://dummyjson.com/products?limit=0&sortBy=title&order=asc';
let fetchData = {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    },
    // only use body for POST, PUT, PATCH requests
    // body: JSON.stringify({
    //     name: "Korlu",
    //     age: 25
    // })
};

fetch(url, fetchData)
.then(function(response){    
    return response.json();
})
.then(function(data){
    console.log(data);
    let products = data.products;
    console.log(products);
    
    let allProducts = document.getElementById("allProducts");
    let myProduct = products.map(function(value, index, array){
        let newPrice = (100 - value.discountPercentage) / 100 * value.price;
        return `
            <div class="eachProduct">
                <img src="${value.images[0]}">
                <p>${value.title}</p>
                <p>
                    <span class="oldPrice">$${value.price}</span>
                    <span class="newPrice">$${newPrice.toFixed(2)}</span>
                </p>
                <button>Add to Cart</button>
                <p class="discount">-${value.discountPercentage}%</p>
            </div>
        `;
    })
    allProducts.innerHTML = myProduct.join('');
})
.catch(function(error){
    alert("Error fetching product");
})