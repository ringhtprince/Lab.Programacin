// Laboratorio1 Ejemplo 1 
let nombre = "Duban Rios";
let edad = 27;
let esEstudiante  = false;

console.log = ( "nombre: " + nombre );
console.log = ( "edad: " + edad );
console.log = ( "es estudiante: " + esEstudiante );

let a = 8;
let b = 4;

let suma = a+b;
let resta = a-b;
let multi = a*b;
let divi = a/b;

console.log = ( "suma: " + suma );
console.log = ( "resta: " + resta );
console.log = ( "multiplicar: " + multi );
console.log = ( "dividir:" + divi);
/**
 * -declara dos vabriable booleana: "esMayorDeEdad" y " "tieneLicencia".
 * -Usa operadore logicos ("&& ,"||) para determinar si una persorna puede conducir
 * -Crea un mensaje de bienvenida utulizando cocatenacion de strinngs y template litrals*/

//*console.log ("Laboratorio1 - Ejercicios 3");

let esMayorDeEdad = true;
let tieneLicencia = true;
    
esMayorDeEdad && tieneLicencia ? console.log('la persona tiene licencia') : console.log('La persona "NO" tiene licencia');
console.log(`Es mayor de edad:${esMayorDeEdad}`);