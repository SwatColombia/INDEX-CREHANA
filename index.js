let iva = 0.19;
let precioFinal;

function calcularIva(precio) {

    let ivaProducto = precio * iva;

    console.log(`el IVA del producto es ${ivaProducto}`);
    let precioFinal = precio - ivaProducto;

}