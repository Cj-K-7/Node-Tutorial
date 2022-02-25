const path = require('path');

// paht 경로 찾기

console.log(__filename);

// Base file name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create path Object
console.log(path.parse(__filename));

// Concatenate path
console.log(path.join(__dirname, 'test', 'hello.html'));