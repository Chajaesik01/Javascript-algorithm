let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');



let arr = input[0].split(' ').map(Number);

function compare(a, b){
    return a - b;
}
arr.sort(compare);

let ans = ""

for(let i =0; i<arr.length; i++){
    ans += arr[i] + " ";
}

console.log(ans);

