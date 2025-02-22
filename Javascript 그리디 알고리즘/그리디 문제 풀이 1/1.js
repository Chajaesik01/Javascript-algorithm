let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let fs = require('fs');
// let input = fs.readFileSync('example.txt').toString().split('\n');

let [n, k] = input[0].split(' ').map(Number);
let arr = []
let cnt = 0;

for(let i = 1; i <= n; i++)
{
    arr.push(input[i].split('\n').map(Number));
}
arr.reverse();
for(let i = 0; i < n; i++)
{
    let length = 0;
    if(k >= arr[i])
    {
        cnt += parseInt(k / arr[i]);
        length = Math.pow(10,String(arr[i][0]).length-1);
        k -= parseInt(k /= arr[i]) * arr[i];
    }
}
console.log(cnt);