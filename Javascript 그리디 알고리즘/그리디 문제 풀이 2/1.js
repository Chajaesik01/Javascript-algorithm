let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

//let fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().split('\n');

let n = Number(input[0]);

let result = -1;

for (let i = parseInt(n/5); i >= 0; i--) {
    let remainder = n - (5 * i);
    
    if (remainder % 3 === 0) {
        result = i + (remainder / 3);
        break;
    }
}

console.log(result);
