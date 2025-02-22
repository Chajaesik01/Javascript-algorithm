let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

//let fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().split('\n');

let expression = input[0];

let num = [];
let operator = [];
let value = '';

for(let i = 0; i <= expression.length; i++){
    if(expression[i] === '+' || expression[i] === '-' || i === expression.length)
    {
        num.push(Number(value));
        operator.push(expression[i]);
        value = '';
    }
    else{
        value += expression[i];
    }
}

let result = num[0];

for(let i = 0; i < operator.length - 1; i++) {
    if(operator[i] === '+') {
        result += num[i + 1];
    } else if(operator[i] === '-') {
        let sum = num[i + 1];
        while (i + 2 < num.length && operator[i + 1] === '+') {
            sum += num[i + 2];
            i++;
        }
        result -= sum;
    }
}
console.log(result);