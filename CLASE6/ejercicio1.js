var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var current_id = 1;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var users = [];

app.get('/users/:id',(req,res)=>{
	/*
	User.findById(req.params.id)
	.then((user)=>{
		res.json(user);
	
	})
	.catch((err)=>{
	res.json(err);
	});
	*/
	res.end();//cierre de conexión
});

app.get('/users/',(req,res)=>{
	/*
	User.findAll()
	.then((users)=>{
		res.json(users);
	
	})
	.catch((err)=>{
	res.json(err);
	});
	*/
	res.end();//cierre de conexión
});


app.post('/users',(req,res)=>{
	var usuario_nuevo ={
		id:current_id++,
		username: req.body.username,
		email:req.body.mail
	}

	/*
	User.crate(usuario_nuevo)
	.then((new_user)=>{
		res.json(new_user);
	
	})
	.catch((err)=>{
	res.json(err);
	});
	*/
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