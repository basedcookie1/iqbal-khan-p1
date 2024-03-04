var products;
fetch('./data/products.json')
    .then(
        (response) => response.json()
    )
    .then(
        (json) => {
            /*console.log(json)*/
            products = json;
            document.getElementById(json.sku).textContent = json.price;
        }
);

function buyBar(sku){
    alert("You purchased one bar: "+sku+" For: $"+products.price)
}