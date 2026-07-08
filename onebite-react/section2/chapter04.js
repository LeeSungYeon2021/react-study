/*
 * 2-4 Spread 연산자, Rest 연산자
 */


// 1. Spread
//  > Spread : 흩뿌리다, 펼치다
//  > 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6]; // ...arr1 >> Spread 연산자
console.log(arr2);

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, ...obj1, d: 4 }; // ...obj1 >> Spread 연산자
console.log(obj2);

function funcA(p1, p2, p3) {
    
  console.log(p1, p2, p3); // 1,2,3
}

funcA(...arr1);

// 2.Rest 매개변수
//  > Rest : 나머지, 나머지 매개변수

function funcB(one,...rest) { // ...rest >> Rest 매개변수는 항상 마지막 매개변수로 위치해야 한다.
    console.log(one,rest); // 1, [2,3]
}

funcB(...arr1);