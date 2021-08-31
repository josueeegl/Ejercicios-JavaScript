//Ejercicio 2

const categorias = {
    Telefonos: {
        Productos: [{
            producto: 'Iphone x',
            precio: 5000
        }, {
            producto: 'Samsung A71',
            precio: 3500
        }, {
            producto: 'Samsung note 10',
            precio: 5500
        }, {
            producto: 'Iphone pro max',
            precio: 8000
        }]
    },
    Computadoras: {
        Productos: [{
            producto: 'Lenovo',
            precio: 7000
        }, {
            producto: 'HP',
            precio: 5000
        }, {
            producto: 'ASUS',
            precio: 10500
        }, {
            producto: 'MAC',
            precio: 15000
        }]
    }
}

const {
    Computadoras,
    Telefonos
} = categorias;


let valor2 = 0;
var totalByCategory = (objeto, categoria) => {
    let valor =0;
    if (categoria == 'Computadoras') {

        valor = Computadoras.Productos.reduce((prectotal, comp) => {
            return prectotal + comp.precio;
        }, 0);
        console.log('El total es: ' + valor);
        valor2 = valor;
        return Computadoras;
    }
    if (categoria == 'Telefonos') {

        valor = Telefonos.Productos.reduce((prectotal, comp) => {
            return prectotal + comp.precio;
        }, 0);
        console.log('El total es: ' + valor);
        valor2 = valor;
        return Telefonos;
    }
}


document.getElementById("boton").onclick = () => {
    var html = '';
    var input = document.getElementById('selec').value;
    var contenedor = document.getElementById('precios');
    var arreglo = totalByCategory(categorias, input);

    arreglo.Productos.forEach(arr => {
        html += `<p>${arr.producto} - ${arr.precio}</p>`;
    });
    html += `<h3> Precio total: ${valor2}</h3>`
    contenedor.innerHTML = html;
};