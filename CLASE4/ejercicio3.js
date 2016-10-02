//Requires
var gzip = require('zlib').createGzip;
var fs = require('fs');
var stream = require('stream');


var reader = fs.createReadStream('lectura.txt');
var writer = fs.createWriteStream('rot13.txt');

//Implementacion del encriptador ROT13 
function rot_13(string){
	return string.replace(/[a-z]/g, (char)=>{
		var charCode;
		if(char <= 'm')
			charCode = char.charCodeAt(0) + 13;
		else
			charCode = char.charCodeAt(0) - 13;
		
		return String.fromCharCode(charCode);
	});
};


//Transformador
var rot13 = new stream.Transform;
rot13._write = function(data, encoding, done){
	//Implementación
	var linea = rot_13(data.toString('utf8'));
	this.push(linea);
	done();
}

//process.stdin.pipe(rot13).pipe(writer);
reader.pipe(rot13).pipe(writer);
//reader.pipe(gzip).pipe(writer);
