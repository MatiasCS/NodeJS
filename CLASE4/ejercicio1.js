//Lectura
var fs = require('fs');

var reader = fs.createReadStream('nombrearchivo.md');
var counter = 0;
//Escuchar un evento

reader.on('data', (dataChunk) =>{
	console.log(dataChunk);
	//veces que se llama al evento
	counter ++;
});

reader.on('end',()=>{
	console.log(counter);
	console.log('fin!');
})

//Escritura

var writer = fs.createWriteStream('nombreArchivoSalida.txt');

writer.write("hola");
write.write("mundo");
writer.end();