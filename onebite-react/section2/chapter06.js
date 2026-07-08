/*
 * 2-6 반복문으로 배열과 객체 순회하기
 */

// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1 배열 인덱스
for(let i=0; i < arr.length; i++) {
    // console.log(arr[i]);
}

let arr2 = [4, 5, 6];
for(let i=0; i < arr2.length; i++) {
    // console.log(arr2[i]);
}

// 1.2 for of - 배열만 가능
for(let item of arr) {
    // console.log(item);
}

// 2. 객체 순회
let obj = {
    name: '이성연',
    age: 20,
    hobby: "테니스"
}

// 2.1 Object.keys() 
// > 객체에서 key값만 배열로 반환
let keys = Object.keys(obj);
// console.log(keys); // ['name', 'age', 'hobby']

for (let i=0; i < keys.length; i++) {
    console.log(keys[i], obj[keys[i]]);
}

for (let key of keys) {
    console.log(key, obj[key]);
}

// 2.2 Object.values()
// > 객체에서 value값만 배열로 반환
let values = Object.values(obj);
console.log(values); // ['이성연', 20, '테니스']

for(let value of values) {
    console.log(value);
}

// 2.3 for in - 객체만 가능
for (let key in obj) {
    console.log(key, obj[key]);
}