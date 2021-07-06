//Codigo del  Cuadrado 

function perimetroCuadrado(lado) {
    return lado * 2
}

function areaCuadrado(lado) {
    return lado * lado
}


//Codigo del  triangulo 


function perimetroTriangulo(lado1 ,lado2, base) {
    return lado1 + lado2 + base
}


function areaTriangulo(base,altura) {
    return(base * altura) / 2
}

// Codigo del circulo 

// diametro



function diametroCirculo(radio) {
    return  radio * 2
}
// PI 

const PI = Math.PI

// Circufernecia


function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI
}

// Area


function areaCirculo (radio) {
    return (radio * radio) * PI
}


// fucionando  js  con html 
function hallarareaCuadrado () {
    const input = document.getElementById("input-cuadrado")
    const value = input.value;
    const area = areaCuadrado(value)
    alert(area)
}


function hallarperimetroCuadrado () {
    const input = document.getElementById("input-cuadrado")
    const value = input.value;
    const perimetro = perimetroCuadrado(value)
    alert(perimetro)
}