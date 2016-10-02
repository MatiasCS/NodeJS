//Lectura
var fs = require('fs');
var reader = fs.createReadStream('lectura.txt');
var writer = fs.createWriteStream('archivoSalida.txt');

/*
//Evento de lectura
reader.on('data', (dataChunk) =>{
	console.log(dataChunk);
	//escritura archivo
	writer.write(dataChunk);
});

//Evento de termino de kectura
reader.on('end',()=>{
	console.log('fin!');
	writer.end();
})
*/

//Codigo anterior en una linea
reader.pipe(writer);