let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

//let fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().split('\n');

let n = Number(input[0]);
let pairs = []
let cnt = 0;
function compare(a, b){
    if(a[1] === b[1]) {
        return a[0] - b[0];
    }
    return a[1] - b[1];
}
for(let i = 1; i <= n; i++){
    let [start, end] = input[i].split(' ').map(Number);
    pairs.push([start, end]);
}
pairs.sort(compare);

let endTime = 0;  

for(let i = 0; i < pairs.length; i++) {

    if(pairs[i][0] >= endTime) {
        endTime = pairs[i][1];
        cnt++;
    }
}

console.log(cnt);