var request = require('request');
request('https://jsonplaceholder.typicode.com/comments', function (error, response, body) {
  if (!error && response.statusCode == 200) {
  	comentarios = JSON.parse(body);
  	var total = comentarios.reduce((prev, next)=>{
	return prev + parseFloat(next.body.length);
},0);
  	console.log("EL largo promedio de caracteres es:" + total/comentarios.length);
  }
})