// 1. falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; 

if(!f1) {
    console.log("f1은 falsy한 값입니다.");
}


// 2. truthy한 값
let t1 = "Hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if(t5) {
    console.log("t5는 truthy한 값입니다.");
}

// 3. truthy와 falsy를 활용한 조건문
function printName(person) {
    if(!person) {
    // if(person === undefined || person === null) {
        console.log("person이 undefined이거나 null입니다.");
        return;
    }

    console.log(person.name);
}

let person = { name: "이성연" };
printName(person);