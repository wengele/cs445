window.onload = function () {
    fetchProducts();
    document.getElementById('saveProductBtn').onclick = saveProduct;
}
function saveProduct() {
    // const jsonString = JSON.stringify({
    //     title: document.getElementById("title").value,
    //     price: document.getElementById("price").value,
    //     description: document.getElementById("description").value
    // });
    fetch('http://localhost:300/products', {
        method: 'POST',
        body: JSON.stringify({
            title: document.getElementById("title").value,
            price: document.getElementById("price").value,
            description: document.getElementById("description").value
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(prod => {
            let row = `
            <tr>
            <td>${prod.id}</td>
            <td>${prod.title}</td>
            <td>${prod.price}</td>
            <td>${prod.description}</td>
        </tr>  
            `;
            document.getElementById("products").innerHTML += row;

        })
}

function fetchProducts() {
    fetch('http://localhost:300/products')
        .then(response => response.json())
        .then(products => {
            let html = `
            <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
        </tr>
            `
            products.forEach(prod => {
                html += `
                <tr>
                    <td>${prod.id}</td>
                    <td>${prod.title}</td>
                    <td>${prod.price}</td>
                    <td>${prod.description}</td>
                </tr>               
               `;

            });
            document.getElementById('products').innerHTML = html;
        });



}