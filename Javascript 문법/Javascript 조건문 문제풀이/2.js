let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

let a = Number(input[0]);
let b = Number(input[1]);

if (b < 45){
    a -= 1
    b += (60-45);
    if(a < 0){
        a = 23;
    }
}
else {
    b -= 45;
}
