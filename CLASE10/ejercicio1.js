//Escribir una funcion que retorne una promesa(Puede usar cualquiera de la api de node, modificandola par aque use una promesa en vez de un callback)
var promisify = require("promisify-node");
var fs = promisify("fs");