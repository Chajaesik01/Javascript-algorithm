let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let fs = require('fs');
// let input = fs.readFileSync('example.txt').toString().split('\n');

let n = Number(input[0]);
let arr = [];

function compare(a, b){
    return a- b;
}

for(let i = 1; i <= n; i++){
    arr.push(Number(input[i]));
}

arr.sort(compare);

let ans = "" ;

for(let i =0; i <arr.length-1; i++){
    ans += arr[i] + "\n";
}
ans += arr[n-1];

console.log(ans);