// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

let data = input.map(line => line.split(' ').map(Number));

for (let i = 1; i < data.length; i++) {
    let hap = 0;
    let avg = 0;
    let n = data[i][0] ;
    
    for (let j = 1; j <= n; j++) {
        hap += data[i][j];
    }
    avg = hap / n;
    let countAboveAvg = data[i].filter(item => item > avg).length;
    let percent = (countAboveAvg / n ) * 100;
    console.log(percent.toFixed(3) + '%');
}