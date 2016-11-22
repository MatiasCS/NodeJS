//Crear un servidor express que tenga un endpoint GET/guardar-hora. Cada vez que un usuario la visite debe actualizar un registro en una base de datos usando sequelize-- La hora debe venir de la api: http://davidayala.eu/current-time/
var express = require('express');
var axios = require('axios');
var bodyParser = require('body-parser');
const fib = require('./lib/fibonacci.js');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
var db = require('./lib/db.js');
const url = 'https://script.googleusercontent.com/macros/echo?user_content_key=PkyXM0lX1YQxAMB8YnPOKjdnvycIp8Om8KwiIAWdjzNuKJIiZyWxkWl93uCtcQNnEOwuAs6IoUQY0ntlotLna_o_eXgghPKam5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP9eJPftfN2ZNoLRHldMXIt_S4chwneYR2t8sh81mxhRCLRz76_FX_cFfrToKeByjCWpJ8UfxJKKow-tS5cMyx3vav4_f3-OVUP9jLPTMv8LEA&lib=MwxUjRcLr2qLlnVOLh12wSNkqcO1Ikdrk'

//Pregunta 2
app.get('/guardar-hora',(req,res)=>{
	
	//Request de la hora e inserción en la BD
	axios.get(url)
  	.then(function(response){
    	var datejson = response.data;
    	var hora = { 
    		horas : datejson.hours,
  			minutos : datejson.minutes,
  			segundos : datejson.seconds
  		};

    	db.Hora.count().then(function(result){
  		if (result == 0){
	  		db.Hora.create(hora)
	        	.then( (nueva_hora) => {
	           		res.json(nueva_hora);
	           		res.end();
	        	})
	        	.catch( (err) => {
	            	res.json(err);
	            	res.end();
	        	});
  		}else{
  			db.Hora.update(hora, {where :{id : 1}})
	        	.then( () => {
	           		res.json(hora);
	           		res.end();
	        	})
	        	.catch( (err) => {
	            	res.json(err);
	            	res.end();
	        	});
  		}
  		});
  	});
});

//Pregunta 3 
app.get('/fibonacci/:n',(req,res)=>{
	var n = req.params.n
	var response = {};
	response['fibonacci-' + n]  = fib.fibonacci(n).toString();
	res.json(response);
	res.end();
});

db.sequelize.sync({force: true}).then(function () {
	app.listen(1313, () => {
	console.log('Servidor arriba en puerto 1313');
	});	
});
