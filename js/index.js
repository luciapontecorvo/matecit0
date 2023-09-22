// Ordenar

fetch('https://fakestoreapi.com/products?sort=desc')
            .then(res=>res.json())
            .then(json=>console.log(json))

// Buscar un producto especifico

fetch('https://fakestoreapi.com/products/5')
            .then(res=>res.json())
            .then(json=>console.log(json))