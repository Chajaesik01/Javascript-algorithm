let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let a = Number(input[0]);

for (let i = 1; i <=a ; i++){
    let result = '';
    for(let j = 0; j < i; j++){
        result += '*'
    }
    console.log(result);
}