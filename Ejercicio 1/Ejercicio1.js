// Ejercicio 1


// Obtenemos los numeros que el usuario va ingresando
var input = document.getElementById('array');
input.addEventListener('change', llenarArray, false);
var numeros = Array();

function llenarArray() {
    var valor = input.value;
    if(valor < 0){ alert('El numero ingresado debe ser positivo');}
    else {
    numeros.push(Number(valor));
    alert('Se agregó un valor nuevo al array ' + numeros);}
}

// calculamos al cuadrado los numeros
var arrCuadrado = Array();
var calcular = (arrUsuario) => {
    arrCuadrado = arrUsuario.map(num => {
    return num * num;
    });
}

function mostrar() {
    var html = '<h3>Arreglo de numeros al cuadrado</h3>';
    calcular(numeros);
    console.log(arrCuadrado);
    var contenedor = document.getElementById('resultado');
    arrCuadrado.forEach(arr => {
        html += `<li>${arr}</li>`
    });
    contenedor.innerHTML = html;

    html = '<h3>Arreglo de numeros ingresados</h3>';
    var contenedor2 = document.getElementById('ingresado');
    numeros.forEach(arr => {
        html += `<li>${arr}</li>`
    });
    contenedor2.innerHTML = html;
}