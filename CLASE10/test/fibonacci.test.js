const expect = require('chai').expect;
const fib = require('../lib/fibonacci.js');

describe('fibonacci', function(){
	describe('#fibonacci', function(){
		it('should return the correct value for n equal 0',()=>{
			let result = fib.fibonacci(0);
			expect(result).to.be.equal(0);
		});

		it('should return the correct value for n equal 1',()=>{
			let result = fib.fibonacci(1);
			expect(result).to.be.equal(1);
		});

		it('should accept integer types as a parameter',()=>{
			//logica
		});
	});
});
