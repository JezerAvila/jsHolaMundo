




//objetos
/**
 * ejemplo con personajes de tv
 */

let nombre = 'Tanjiro';
let anime = 'Demoslayer'
let edad = 16;

let personaje = {
    nombre:'Tanjiro',
    anime:'Demon slayer',
    edad:'16',
};
console.log(personaje);

//consultar valor por medio de la llave:
console.log(personaje.nombre);
console.log(personaje['anime']);

//modificar valor por medio de la llave:
personaje.nombre = 'Chespirito'; //mas comunmente usada si sabes el nombre de la propiedad

let llave = 'edad'
personaje[llave] = '8'; //usar si vas iterar o si no sabes el nombre de la variable aun

//para eliminar propiedad:
delete personaje.anime;

console.log(personaje);


