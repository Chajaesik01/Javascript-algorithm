    let fs = require('fs');
    let input = fs.readFileSync('/dev/stdin').toString().split('\n');

    // 첫 번째 줄에서 행의 수를 읽어오기
    let n = Number(input[0]);

    let result = 0;
    let count = 0;
    let value1 = 0;
    let value2 = 0;
    let max = 0;
    let isCheck = false;
    for (let i = 1; i <= n; i++){
        
        let row = input[i].split(' ').map(Number);

        for(let j = 0; j < row.length; j++){
            if (max < row[j])
                max = row[j];
            let currentCount = row.filter(item => item === row[j]).length;
            if(count <= currentCount) {
                if(count === 2 && currentCount === 2 && value1 !== row[j]) {
                    value2 = row[j];
                    isCheck = true;
                }
                if(count < currentCount) {
                    count = currentCount;
                    value1 = row[j];
                }
            }
        }
    }

    if(count === 4){
        result = (50000 + (value1 * 5000))
    } else if ( count === 3){
        result = (10000 + (value1 * 1000))
    }else if ( count === 2 && isCheck === true){
        result = (2000 + (value1 * 500) + (value2*500))
    }
    else if ( count === 2 && isCheck === false){
        result = (1000 + value1 * 100);
    }else{
        result = max * 100;
    }

    console.log(result);