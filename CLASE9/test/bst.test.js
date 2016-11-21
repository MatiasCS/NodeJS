const expect = require('chai').expect;
const trees = require('../lib/bst.js');

var bst = new trees.BST();
bst.append(3);
bst.append(2);
bst.append(4);
bst.append(6);
bst.append(8);
bst.append(5);

describe('Binary Search Tree', function(){
	describe('#append', function(){
		it('should return the modified tree',()=>{
			//let result = trees.max(bst.root);
			//expect(result).to.be.equal(8);
		});
	});

	describe('#max', function(){
		it('should return the max value',()=>{
			let result = trees.max(bst.root);
			expect(result).to.be.equal(8);
		});
	});	

	describe('#min', function(){
		it('should return the min value',()=>{
			let result = trees.min(bst.root);
			expect(result).to.be.equal(2);
		});
	});

	describe('#height', function(){
		it('should return the height',()=>{
			let result = trees.height(bst.root);
			expect(result).to.be.equal(4);
		});
	});
});