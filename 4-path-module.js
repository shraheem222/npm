const path = require('path')

// return sererate according to the platform
console.log(path.sep);

// join path 
const filePath = path.join('/content/', 'subfolder', 'test.txt');
console.log(filePath);

// return base file 
const base = path.basename(filePath);
console.log(base);

// return absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
