const expect = require('chai').expect;
const API = 'URL';

describe('User' ()=>{
	describe(#getAll, ()=>{
		it('should fetch all users',(done)=>{
			let users = User.getAll()
				.then(users =>{
					expect(users.data).to.have.lengthOf(10);
					users.forEach( u => {
						expect(u).to.have.property('name')
					});
					done();//Aviso de que termino de realizar la operación
				});
		});
	});

	describe(#findOne, ()=>{
		it('should fetch one| users',(done)=>{
			let users = User.findOne(2)
				.then(users =>{
					expect(users.id).to.be.equal(2);
					expect(users.name).to.be.equal('John Snow');
					});
					done();//Aviso de que termino de realizar la operación
			});
	});
});