cons request = require('request');
const API_URL = 'your_url';
cons Promise = require('bluedird');
/*
function myRequest(url){
	return new Promise(function(resolve, reject){
		request(url)

	});
}
//promise all 
myRequest('url')
.then(function(nody){
	console.log(body);
})
.catch(function(err){
	consolo.error('Hubo un error',err)
});
*/
//var Promise = Promise.promisify(request);

var promesa1 = myRequest(API_URL + '/users');
var promesa2 = myRequest(API_URL + '/users');
var promesa3 = myRequest(API_URL + '/users');

Promise.all([promesa1, promesa2, promesa3]);