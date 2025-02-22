let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let fs = require('fs');
// let input = fs.readFileSync('example.txt').toString().split('\n');

let line1 = input[0].split(' ');
let line2 = input[1].split(' ');
let key = Number(line1[1]);

function compare(a, b){
    return a - b;
}

let arr = line2.map(Number);
arr.sort(compare)
console.log(arr[key-1]);