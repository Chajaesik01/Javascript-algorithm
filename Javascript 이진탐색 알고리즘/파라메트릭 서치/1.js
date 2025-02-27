let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

//let fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);
let m = Number(input[2]);

function compare(a, b){
    return a - b; 
}
arr.sort(compare);

let start = 0;
let end = arr[n-1];

let result = 0;
while(start <= end)
{
    let mid = parseInt((start + end)/2);

    let total = 0;

    for(let i =0; i< n; i++)
    {
        total += Math.min(arr[i], mid);
    }

    if( total <= m)
    {
        result = mid;
        start = mid + 1;
    }
    else
    {
        end = mid - 1;
    }
}
console.log(result);