let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

let n = Number(input[0]);

for (let i = 1; i<= n; i++){
    let [r, s] = input[i].split(" ");
    let result = "";
    console.log(r);
    console.log(s);
    for (let j =0; j <= s.length; j++){
        result += s.charAt(j).repeat(r);
    }
    console.log(result);
}