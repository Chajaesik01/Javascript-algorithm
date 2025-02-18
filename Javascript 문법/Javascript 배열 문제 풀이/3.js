let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let data = input.map(x => Number(x));
result = [];
for (let i = 0; i < 10; i++) {
    let item = (data[i] % 42);
    if(!result.includes(item))
        result.push(item);
}
console.log(result.length);