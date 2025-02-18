let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

let max = 0;
let min = 9999;

let a = Number(input[0]);
let b = input[1].split(' ').map(Number);

// for(let i =0; i< a; i++){
//     if (max < b[i])
//         max = b[i];
//     else if(min > b[i])
//         min = b[i];
// }

// 또는 ..

min = b.reduce((a,b) => Math.min(a,b));
max = b.reduce((a,b)=> Math.max(a,b));

console.log(max, min);