var moment = require("moment");
console.log(moment().format("LL"));
var unaSemanaMas = moment().add(7,'days').calendar()
console.log(unaSemanaMas);

/*
for (i = 0; i < 7; i++){
	console.log(moment().add(i,'days').calendar());
}

var nombre = "Hola";
Funcion
function saludarAlguien(nombre){
	console.log(nombre);
}
//Funcion anonima facilita el paso de valores
//En el fondo saludarAlguien realiza la funcion de console.log
var saludarAlguien = function(nombre){
	console.log(nombre);
}

saludarAlguien("Jon Snow");

Arreglos
var lista = [1,2,3,4,5];

//Agrega el valor
lista.push(3);

//No modifica la variable original
lista.concat([3]);

//Objetos
var persona = {
	nombre: 'Jon Snow',
	edad: '20'
};

console.log(persona.nombre);
console.log(persona['nombre']);

//Constructor (Objeto funciones) no se usa mucho por herencia
function Persona(name){
	this.name = name;
	this.saludar = function(){
		console.log(this.name);
	}
}

var arya = new Persona(name);
*/