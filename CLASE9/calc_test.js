const expect = require('chai').expect;
const calc = require('../lib/calc.js');

describe('calculadora', function(){
	describe('#add', function(){
		it('should add two numbers',()=>{
			let result = calc.add(2,2);
			expect(result).to.be,equal(4);
		});
	});

	describe('#sub', function(){
		it('should substract two numbers',()=>{
			let result = calc.sub(2,2);
			expect(result).to.be,equal(0);
		});
	});	

	describe('#times', function(){
		it('should multiply two numbers',()=>{
			let result = calc.sub(2,2);
			expect(result).to.be,equal(4);
		});
	});	

	describe('#div', function(){
		it('should divide two numbers',()=>{
			let result = calc.sub(4,2);
			expect(result).to.be,equal(2);
		});
		it('should throw Error if division by zero',()=>{
			expect(calc.div.bind(calc,1,0)).to.throw(Error);
		});
	});
});