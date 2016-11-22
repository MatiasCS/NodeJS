function fibonacci(n){
    if (!(n === parseInt(n, 10))) {
        throw new Error('All arguments must be numbers');
    }
	if(n == 1)
		return 1;
	if(n== 0)
		return 0;
	return(fibonacci(n-1) + fibonacci(n-2))
}

module.exports = {
	fibonacci: fibonacci
}