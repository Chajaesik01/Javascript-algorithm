let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

//let fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().split('\n');

let [n, k] = input[0].split(' ').map(Number);
let cnt = 0;
let check = false;
while (k >= n) {
    if(n === k)
    {
        check = true;
        break;
    }
    if (k % 2 === 0) {
        k = parseInt(k / 2);
    }

    else if(k % 10 === 1){
        k = parseInt(k / 10);
    }
    else{
        break;
    }
    cnt++;
}

if (check) {
    console.log(cnt + 1);
} else {
    console.log(-1);
}