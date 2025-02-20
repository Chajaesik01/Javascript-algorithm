let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

//let fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().split('\n');

let n = Number(input[0]);
let result = input[1].split(' ').map(Number);

let items = result.map((value, index) => ({ value, index }));

items.sort((a, b) => a.value - b.value);

let count = new Array(n).fill(0);
let uniqueValues = [];
let lastValue = null;

for (let i = 0; i < n; i++) {
  if (i === 0 || items[i].value !== lastValue) {
    uniqueValues.push(items[i].value);
  }
  lastValue = items[i].value;
  
  count[items[i].index] = uniqueValues.length - 1;
}

let ans = ""
for (let i =0; i< n; i++){
    ans += count[i] + " ";
}
console.log(ans);