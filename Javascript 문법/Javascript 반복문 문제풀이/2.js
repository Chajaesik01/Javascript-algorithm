let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = Number(input[0]);
let result = '';
for(let i = 1; i <= 8; i++){
    result += a + ' * ' + i + ' = ' + (a*i) + '\n';
}
result += a + ' * ' + 9 + ' = ' + (a*9);

console.log(result);