/*
 * 2-3 구조 분해 할당
 */

//배열선언
let arr = [1, 2, 3];

// 기존방식 (?)
// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

// 1. 배열의 구조 분해 할당
let [one, two, three, four = 4] = arr; 
console.log(one, two, three, four); 

// 2. 객체의 구조 분해 할당
let person = {
    name: "이성연",
    age: 30,
    hobby: "축구"
}

// 기존방식 (?)
// let name = person.name;
// let age = person.age;
// let hobby = person.hobby;

// let { name, age, hobby } = person; 
let { name, age: myAge, hobby } = person; 
console.log(name, myAge, hobby);

// 객체 vs 배열 구조 분해 할당
//   1. 괄호차이
//   2. 객체 구조 분해 할당 시 변수명 변경가능

// 3. 객체 구조 분해 할당을 이용한 함수의 매개변수 받는 방법
const func = ({ name, age, hobby }) => {    
    console.log(name, age, hobby);
}

func(person);