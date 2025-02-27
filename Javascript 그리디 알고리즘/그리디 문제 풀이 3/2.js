//let fs = require('fs');
//let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

let [t, k] = input[0].split(' ').map(Number);

let hap = 0;

for(let i = 1; i < k +1; i++)
{
    hap += i;
}
if( hap > t)
{
    console.log(-1);
}
else 
{
    t -= hap;
    if( t % k === 0)
        console.log(k -1);
    else
        console.log(k);
}
