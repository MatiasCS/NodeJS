//request usuario
var userName = process.argv[2];
var request = require('request');
var targetUser;
var albumList;
var photosList = [];

//CALLBACK HELL
request('https://jsonplaceholder.typicode.com/users', function (error, response, body) {
  if (!error && response.statusCode == 200) {
  	//Extraer usuario
  	var users = JSON.parse(body);
  	targetUser = users.filter((user)=> user.name == userName)[0];

  	//Request album
  	request('https://jsonplaceholder.typicode.com/albums', function (error, response, body) {
  		if (!error && response.statusCode == 200) {
  			//Extraer albums
  			var albums = JSON.parse(body);
  			albumList = albums.filter((album)=> album.userId == targetUser.id);
  			
  			//Request fotos
  			request('https://jsonplaceholder.typicode.com/photos', function (error, response, body) {
  				if (!error && response.statusCode == 200) {
  					//Extraer Fotos
  					var photos = JSON.parse(body);
  					albumList.forEach((album)=>{
  						photosList.push(photos.filter((photo)=>photo.albumId == album.id));
  					})
  				}
			})
			//End Request fotos
  		}
	})
	//End Request album
  }

})