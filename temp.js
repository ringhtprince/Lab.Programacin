// Declaración de variables booleanas
let esMayorDeEdad = true; // Cambia a `false` para probar
let tieneLicencia = true; // Cambia a `false` para probar

// Determinar si la persona puede conducir
let puedeConducir = esMayorDeEdad && tieneLicencia;

// Mensaje de bienvenida utilizando concatenación y template literals
let mensaje = "Bienvenido, ";
mensaje += puedeConducir 
    ? `puedes conducir porque ${esMayorDeEdad ? "eres mayor de edad" : ""} y ${tieneLicencia ? "tienes licencia" : ""}.`
    : `no puedes conducir porque ${!esMayorDeEdad ? "no eres mayor de edad" : ""} ${!tieneLicencia ? "y no tienes licencia" : ""}.`;

console.log(mensaje);
