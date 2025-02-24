let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

//let fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().split('\n');

let t = Number(input[0]);
let currentLine = 1;

function compare(a, b)
{
    return a[0] - b[0];
}
for (let tc = 0; tc < t; tc++)
{
    let n = Number(input[currentLine]);
    let arr = [];
    let cnt = 1;
    for(let i = 0; i < n; i++)
    {
        arr.push(input[currentLine + 1 + i].split(' ').map(Number));
    }
    currentLine += n + 1;
    arr.sort(compare);
    let minY = arr[0][1];
    for(let i = 1; i< arr.length; i++)
    {
        if(arr[i][1] < minY)
        {
            minY = arr[i][1];
            cnt++;
        }
    }
    console.log(cnt);
}