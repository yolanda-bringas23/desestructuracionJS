//1) Dado el siguiente array, extrae los valores indicados utilizando la desestructuración:
const numeros = [1, 2, 3, 4, 5];
// Extraer el primer y tercer valor del array utilizando la desestructuración 
const [primer, , tercer] = numeros;
console.log(primer);
console.log(tercer);

//2) Dado el siguiente array, utiliza el operador de rest para extraer los últimos dos valores en una nueva variable:
const letras = ['a', 'b', 'c', 'd', 'e'];
// Utilizar el operador de rest para extraer los dos últimos valores en una nueva variable
const[...ultimosValores] = letras.slice(-2)
console.log(ultimosValores); 

//3) Dado el siguiente array que contiene información sobre pedidos, utiliza la desestructuración para extraer información específica:
const pedidos = [
[1, 'Producto A', 10],
[2, 'Producto B', 15],
[3, 'Producto C', 5]
];
// Extraer los nombres de los productos y las cantidades utilizando la desestructuración

const [
    [ , nombre1, canti1],
    [ , nombre2, canti2],
    [ , nombre3, canti3]
] = pedidos
console.log(nombre1, canti1);
console.log(nombre2, canti2);
console.log(nombre3, canti3);

//4) Dado el siguiente array que contiene información sobre estudiantes, utiliza la desestructuración con valores por defecto para manejar casos donde la información está incompleta:
const estudiantes = [
['Juan', 25],
['María'],
['Pedro', 30]
];
// Extraer nombres y edades de los estudiantes, asignando edades por defecto si no están disponibles
const [
    [Nombre1, edad1],
    [Nombre2, edad2 = 40],
    [Nombre3, edad3]
] = estudiantes 

console.log(Nombre1, edad1);
console.log(Nombre2, edad2);
console.log(Nombre3, edad3); 

// 1obj) Dado el siguiente objeto, extrae las propiedades indicadas utilizando la desestructuración:
const persona = {
nombre: 'Ana',
edad: 28,
ciudad: 'México'
};
// Extraer el nombre y la ciudad utilizando la desestructuración
const {nombre, edad, ciudad} = persona;
console.log(nombre);
console.log(ciudad);
