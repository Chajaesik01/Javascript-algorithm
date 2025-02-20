arr = []

arr.sort(compareFunction);

// compare function : 정렬 기준 함수

Javascript의 정렬 함수에서는 정렬 기준 함수가 사용된다
두 개의 원소 a, b를 직접 입력으로 받는다
1. 반환 값이 0보다 작은 경우 -> a가 우선순위가 높아 앞에 위치한다
2. 반환 값이 0보다 큰 경우 -> b가 우선순위가 높아 앞에 위치한다
3. 반환값이 0인경우 -> a와 b의 순서를 변경하지 않는다

// 정렬 기준 함수 참고사항

정렬 기준 함수를 사용하지 않으면 각 원소는 문자열로 취급된다
유니코드 값 순서대로 정렬된다
따라서 항상 정렬 기준 함수를 명시하는 습관을 들이자


let arr = [1, 8, 5, 9 ,21, 3, 7, 2, 15];

function compare(a, b){
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
}

arr.sort(compare)

console.log(arr);

// 더 간단하게 ..

function compare(a, b){
    return a.toUpperCase - b.toUpperCase;
    // 대소문자 구문 없이
}

// 더더 간단하게

arr.sort(function(a,b){
    // 지금은 오름차순
    return a- b; // b와 a의 위치를 변경해서 오름차순 또는 내림차순으로 할 수 있다. 
})
