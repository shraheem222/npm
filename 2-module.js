// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require("./2-names");

const sayHi = require("./2-function");

const data = require("./2-alternative-syntax");

// this will invokes function in mind-grenade file 
require("./2-mind-grenade");

console.log(data);



sayHi(`susan`);
sayHi(names.john);
sayHi(names.peter);