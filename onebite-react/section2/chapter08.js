/*
 * 2-8 배열 메서드 순회/탐색
 */

// 1. forEach
// 모든 요소를 순회하면서, 가각ㄱ의 요소에 특정 동작을 수행시키는 메서드

let arr1 = [1, 2, 3];
arr1.forEach((item, idx, arr) => {
    // console.log(arr)
});

let doubledArr = [];
arr1.forEach((item) => {
    doubledArr.push(item * 2);
});

console.log(doubledArr)

// 2. includes
// 배열에 특정요소가 있는지 확인해주는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);
console.log(isInclude); // boolean값 반환

// 3. indexOf
// 특정 요소의 위치를 찾아서 반환해주는 메서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
console.log(index);

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런...
// 특정 요소의 위치를 반환해주는 메서드
let arr4 = [1, 2, 3];
const findInex = arr4.findIndex((item) => item === 3);
console.log(findInex);

// indexof는 얕은비교만 가능
// findIndex는 객체,배열 등 상세비교 가능

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr5 = [
    {name: "이성연"},
    {name: "홍길동"},
];

const finded = arr5.find((item) => item.name === "이성연");
console.log(finded);
