
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [x, y] = input[0].split(' ');

let n_x = '';
let n_y = '';
for(let i = x.length-1; i >= 0; i--){
    n_x += x[i];
}
for(let i = y.length-1; i >= 0; i--){
    n_y += y[i];
}
console.log(Math.max(n_x,n_y));