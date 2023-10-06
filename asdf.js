// Definimos la función que aplicará el descuento
let startNumber = 100;
let lessNumber = 10;
function aplicarDescuento() {
    console.log(`Precio con descuento: $${startNumber - lessNumber}`);
    lessNumber = 60;
    console.log(lessNumber);
}

// Llamamos a la función después de 5 segundos usando setTimeout
setTimeout(aplicarDescuento, 5000); // 5000 milisegundos = 5 segundos
