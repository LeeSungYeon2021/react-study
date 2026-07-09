/*
 * 2-13 비동기 작업 처리하기 (Promise)
 */

// Promise 상태 : 대기, 해결, 성공/실패


function add10(num) {    
    const promise = new Promise((resolve, reject) => {
        // 비동기 작업
        // executor 

        setTimeout(() => {            
            if(typeof num === 'number') {
                resolve(num + 10);
            } else {
                reject("숫자 타입 아님!")
            }
            // console.log("안녕");
            // resolve("해결");
            // reject("실패");
        }, 2000);
    });

    return promise;
}

const  p = add10(0);
p.then((result) => {        
    console.log(result);
    return add10(result);    
}).then((result) => {    
    console.log(result);
    return add10(undefined);
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});


// then 메서드 
// 작업 성공시 호출 (resolve)
// promise.then((value) => {
//     console.log(value);
// });

// catch 메서드
// 작업 실패시 호출 (reject)
// promise.catch((error) => {
//     console.log(error);
// });

// Promise channing
// promise.then((value) => {
//     console.log(value);
// }).catch((error) => {
//     console.log(error);
// });



