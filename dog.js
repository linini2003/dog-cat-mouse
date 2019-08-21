var chalk = require('chalk')


function Dog(name) {
	// body...
	this.name = name;
	this.stomach = [];
}

Dog.prototype.eat = function(cat) {
	this.stomach.push(cat)
}
 
Dog.prototype.sayHi = function() {
	// body...
	console.log("Hi! I am a dog. My name is " + chalk.green(this.name))
};

module.exports = Dog
