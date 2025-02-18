let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

let a = Number(input[0]);

// 점수에 따라 등급을 판단
switch (true) {
    case (a >= 90):
        console.log("A");
        break;
    case (a >= 80):
        console.log("B");
        break;
    case (a >= 70):
        console.log("C");
        break;
    case (a >= 60):
        console.log("D");
        break;
    default:
        console.log('F');
}
