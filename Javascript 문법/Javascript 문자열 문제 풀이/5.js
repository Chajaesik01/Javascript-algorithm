
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let string = input[0];
let cnt = 1;
let n = string.length;


for(let i = 0; i < string.length; i++){
    if(string[i] === ' '){
        cnt++;
    }
}

if(string[0] === ' ')
{
    cnt--;
}
if(string[n-1] === ' ')
{
    cnt--;
}
console.log(cnt);