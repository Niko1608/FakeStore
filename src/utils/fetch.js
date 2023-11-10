fetch('https://fakestoreapi.com/products')
    .then(response => response.json()) // Convertir la respuesta a JSON
    .then(data => {
        // Hacer algo con los datos
        console.log(data);
    })
    .catch(error => {
        // Manejar los posibles errores
        console.error(error);
    });
