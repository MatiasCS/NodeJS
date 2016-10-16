//Package json:
//Scripts colocar funciones que son importantes
//"start":archivo a ejecutar (minimo a incluir)
//"test": archivo a ejecutar
//uso : npm start

var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var current_id = 1;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var users = [];

app.get('/users/:id',(req,res)=>{
	var user = users.filter((user)=>user.id == req.params.id)[0];
	res.json(user);
	res.end();//cierre de conexión
});

app.get('/users/',(req,res)=>{
	res.json(users);
	res.end();//cierre de conexión
});


app.post('/users',(req,res)=>{
	var usuario_nuevo ={
		id:current_id++,
		username: req.body.username,
		email:req.body.mail
	}

	users.push(usuario_nuevo);
	res.json(usuario_nuevo);
	res.end();

});

app.delete('/users/:id',(req,res)=>{
	//filter o foreach
	users = users.filter((user)=>user.id != req.params.id)[0];
	res.json(users);
	res.end(); 
})


app.put('/users/:id/:field/:value',(req,res)=>{
	users.forEach((element,index,array)=>{
		if(element.id == req.params.id){
			element[req.params.field] = req.params.value;
			res.json(element);
		}
	});
	res.end();
})

app.listen(1313,()=>{
	console.log('Servidor arriba en el puerto 1313');
});