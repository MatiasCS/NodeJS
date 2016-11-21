function add(a,b){
	if (typeof(a) != 'number' || typeof(b) != 'number')
		throw  new Error('All arguments must be numbers');
	
	return a + b;
};

function sub(a,b){
	if (typeof(a) != 'number' || typeof(b) != 'number')
		throw  new Error('All arguments must be numbers');
	
	return a-b;
}

function times(a,b){
	if (typeof(a) != 'number' || typeof(b) != 'number')
		throw  new Error('All arguments must be numbers');

	return a*b;
}

function div(a,b){
	if (typeof(a) != 'number' || typeof(b) != 'number')
		throw  new Error('All arguments must be numbers');
	if(b == 0)
		throw  new Error('Division by 0');

	return a/b;
}

module.exports = {
	add: add,
	sub: sub,
	times: times,
	div: div
}