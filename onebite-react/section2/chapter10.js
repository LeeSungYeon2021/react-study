/*
 * 2-10 Date 객체와 날짜
 */

// 1. Date 객체를 생성하는 방법
let date1 =new Date();
console.log(date1);

let date2 = new Date("1997-01-07");
console.log(date2);

// 2. timestamp
// 특정 시간이 "1970.01.01 00시 00분 00초" 부터 얼마의 ms 만큼 지났는지 의미하는 숫자 값
let ts1 = date1.getTime();
console.log(ts1);

let date3 = new Date(ts1);
console.log(date1, date3);

// 3. 시간 요소들을 추출하는 방법 (년, 월, 일, 시, 분, 초)
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let date = date1.getDate();
let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(
    year,
    month,
    date,
    hour,
    minute,
    seconds    
)

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2);
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

console.log(date1);

// 5. 시간을 여러 포맷으로 출력
console.log(date1.toDateString());
console.log(date1.toLocaleString());