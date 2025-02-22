let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let fs = require('fs');
// let input = fs.readFileSync('example.txt').toString().split('\n');

let n = Number(input[0]);
let arr = new Array(n);

for (let i = 1; i <= n; i++){
    let [x, y] = input[i].split(' ').map(Number);
    arr[i] = {
        x: x,
        y: y
    }
}

function Compare(a, b){
    if(a.y === b.y){
        return a.x - b.x;
    } 
    return a.y - b.y
}

arr.sort(Compare);

for (let i = 0; i < n; i++) {
    console.log(arr[i].x, arr[i].y);
}