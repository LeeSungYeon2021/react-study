/*
 * 2-7 6가지의 요소 조작 메서드
 */

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr = [1, 2, 3];
const newLength = arr.push(4);
console.log(arr); // [1, 2, 3, 4]
console.log(newLength); // 4

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하는 메서드
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();
console.log(arr2); // [1, 2]
console.log(poppedItem); // 3

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거하는 메서드
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
console.log(arr3); // [2, 3]
console.log(shiftedItem); // 1  

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);
console.log(arr4); // [0, 1, 2, 3]
console.log(newLength2); // 4   

// push, pop vs shift, unshift
//  > push,pop은 이미 선언 된 배열 맨 뒤에서 추가,삭제 작업하기에 shift,unshift보다 빠르다.

// 5. slice
// 배열의 일부를 잘라내어 새로운 배열을 반환하는 메서드
let arr5 = [1, 2, 3, 4, 5];
const slicedArr = arr5.slice(1, 4);
const slicedArr2 = arr5.slice(2); // 2번 인덱스부터 다 잘라냄
const slicedArr3 = arr5.slice(-3); // 뒤에서 3개 잘라냄
console.log(slicedArr); // [2, 3, 4]
console.log(arr5); // [1, 2, 3, 4, 5] 원본 배열은 그대로 유지