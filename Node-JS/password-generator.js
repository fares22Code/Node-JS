var generator = require('generate-password');

var passwords = generator.generateMultiple(10, {
	length: 10,
	uppercase: false
});


console.log(passwords);