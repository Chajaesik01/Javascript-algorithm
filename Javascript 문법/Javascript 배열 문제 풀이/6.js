let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

let line1 = input[0];
let line2 = input[1].split(' ').map(Number);

let max = line2.reduce((x,y) => Math.max(x, y));
console.log(line1);
console.log(line2);
console.log(max);