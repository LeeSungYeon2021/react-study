// math 모듈

export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

export default function multiply(a, b) {
    return a * b;
}

// ES 모듈방식
// export { add, sub };

// CJS 모듈방식
// module.exports = {
//     add : add,
//     sub : sub
// }