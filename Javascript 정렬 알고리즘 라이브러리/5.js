let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let fs = require('fs');
// let input = fs.readFileSync('example.txt').toString().split('\n');

let n = Number(input[0]);
let arr = []
function compare(a, b) {
    if (a.length === b.length) {
        for (let i = 0; i < a.length; i++) {
            if (a.charCodeAt(i) !== b.charCodeAt(i)) {
                return a.charCodeAt(i) - b.charCodeAt(i);
            }
        }
    }
    return a.length - b.length;
}

for(let i=1; i<=n; i++){
    arr.push(input[i]);
}

arr.sort(compare);

let uSet = new Set(arr);
let resultArray = Array.from(uSet);

for(let i =0; i< resultArray.length; i++){
    console.log(resultArray[i]);
}

