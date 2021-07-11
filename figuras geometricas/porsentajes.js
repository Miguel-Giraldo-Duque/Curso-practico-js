
function calcularPrecioConDescuento(precio,descuento) {
    const porsentajePrecioConDescuento = 100 - descuento;
    const resultado = (precio*porsentajePrecioConDescuento)/100;

    return resultado
}

function hallarPrecioFinal(params) {
    const precios = document.getElementById("precio")
    const priceValvue = precios.value;

    const descuentos = document.getElementById("descuento")
    const discountValvue = descuentos.value;

    const hallarPrecio = calcularPrecioConDescuento(discountValvue,priceValvue)
    
    const resultp = document.getElementById("resultadoP")
    resultp.innerText = "El vaolr final con el descuento es de $ "+ hallarPrecio
}
