//Crear un servidor express que tenga un endpoint GET/guardar-hora. Cada vez que un usuario la visite debe actualizar un registro en una base de datos usando sequelize-- La hora debe venir de la api: http://davidayala.eu/current-time/
var express = require('express');
var axios = require('axios');
var bodyParser = require('body-parser');
const fib = require('./lib/fibonacci.js');
var app = express();
//var current_id = 1;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var db = require('./lib/db.js');

app.get('/guardar-hora',(req,res)=>{
	axios.get('https://script.googleusercontent.com/macros/echo?user_content_key=PkyXM0lX1YQxAMB8YnPOKjdnvycIp8Om8KwiIAWdjzNuKJIiZyWxkWl93uCtcQNnEOwuAs6IoUQY0ntlotLna_o_eXgghPKam5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP9eJPftfN2ZNoLRHldMXIt_S4chwneYR2t8sh81mxhRCLRz76_FX_cFfrToKeByjCWpJ8UfxJKKow-tS5cMyx3vav4_f3-OVUP9jLPTMv8LEA&lib=MwxUjRcLr2qLlnVOLh12wSNkqcO1Ikdrk')
  .then(function(response){
    console.log(response.data); 
    console.log(response.status);
  });  
});

app.get('/fibonacci/:n',(req,res)=>{
	var n = req.params.n
	var response = {};
	response['fibonacci-' + n]  = fib.fibonacci(n).toString();
	res.json(response);
	res.end();
});

app.listen(3000,()=>{
	console.log('Servidor arriba en puerto 3000');
});
