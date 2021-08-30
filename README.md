Ejercicio 1:
Crear una función que reciba como parámetro un arreglo de números y retornar en
la consola los elementos elevados al cuadrado solo si se cumple que el número es
positivo.
Hint: Puede usar el método .map() para realizar la iteración y retornar el arreglo
modificado.
entrada: [2, 4, 6]
salida: 4, 16, 36
entrada: [-3, 2, -8, 12, 5]
salida: -3, 4, -64, 144, 5
entrada: [1, 2, 3, 4, 5]
salida: 1, 4, 3, 16, 5

Ejercicio 2:
Dado un arreglo de objetos como parámetro de una función, conteniendo la
categoría y precio del producto, retornar el precio total de una categoría indicada.
Hint: Usar los métodos .filter() y .reduce() para lograr el resultado.
totalByCategory(inventory, "beverage");
debe mostrar en cosola: 120
totalByCategory(inventory, "no-existe");
debe mostrar en cosola: 0

Ejercicio 3:
Implementa una función que reciba una oración y devuelva cada letra inicial de una
palabra en mayúscula.
Entrada: 'quezadillas de jutiapa'
Salida: ' Quezadillas de Jutiapa '

Ejercicio 4:
// Dado un arreglo de números, "SumaElementos" devuelve el promedio de todos
los elementos de la matriz dada.
entrada:
array = [10, 20, 30, 20, 30, 40, 60];
Salida:
imprimir en consola el mensaje... "El promedio de este arreglo es: 30"

Ejercicio 5:
Dando un arreglo y un digito, encuentra y muestra en consola los 2 digitos que
sumen el digito.
Debes retornar los 2 dígitos que hagan la suma en un arreglo.
Entrada:
Par = BuscarSumaPar([3, 34, 4, 12, 5, 2], 9);
Salida:
console.log(par); // --> [4, 5]

Ejercicio 6:
Sea el arreglo:
let toda_la_banda = ["Diana", "Monica", "Maria", "Breny"];

1. Usando foreach, despliegue los nombres del arreglo en una lista ordenda en el dom.
2. Saque una copia del arreglo pero que no incluya a Monica.
3. En el nuevo arreglo, investigue la forma de remover a Breny.
4. Agregue a José al principio del nuevo arreglo.
5. Agregue su nombre el final del nuevo arreglo.
6. Obtenga el ítem de Diana
7. Haga otra copia del arreglo original usando slice, excluya a Diana y Breny
8. Investigue cómo devolver el índice de Monica (hacer una función para esto), devolver -1 si
   no existe
