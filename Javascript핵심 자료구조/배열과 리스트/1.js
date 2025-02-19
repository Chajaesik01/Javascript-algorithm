
// 배열
let arr = [];
let arr2 = Array.from({ length: 5}, () => 7); // 값이 7인 5개원소
let arr3 = Array.from(Array(4), () => new Array(5)); // 2차원배열
arr.push(7);
arr.push(8);
arr.push(9);

console.log(arr);

// 리스트