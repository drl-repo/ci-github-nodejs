let { addition } = require('../lib/Calculator')
let assert = require('chai').assert

describe('Test addition function', function(){

	it('Should be 2', function(){
		assert.equal(addition(1,1), 2)
	})

	it('Should be 10', function(){
		assert.equal(addition(5,5), 10)
	})

	it('Should be 100', function(){
		assert.equal(addition(10,90), 100)
	})

	it('Should be 1000', function(){
		assert.equal(addition(1,999), 1000)
	})

	it('Should be 1000000', function(){
		assert.equal(addition(500000,500000), 1000000)
	})
})