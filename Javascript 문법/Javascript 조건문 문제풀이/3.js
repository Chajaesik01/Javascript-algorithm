let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let fs = require('fs');
// let input = fs.readFileSync('example.txt').toString().split('\n');

let line1 = input[0].split(' ');
let a = Number(line1[0]); 
let b = Number(line1[1]); 

let c = Number(input[1]);

let hour = a * 60 + b + c;
hour  %= 1440;
a = parseInt(hour / 60);
b = hour % 60;

console.log(a + " " + b);