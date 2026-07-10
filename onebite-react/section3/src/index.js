// CJS 모듈
// package.json > type: commonjs
// const { add, sub } = require("./math");
// console.log(moduleData.add(1,2));
// console.log(moduleData.sub(1,2));


// ES 모듈
// package.json > type: module
import multiply from "./math.js";
import { add, sub } from "./math.js";

console.log(add(1,2));
console.log(sub(1,2));
console.log(multiply(1,2));


// randomColor 라이브러리 테스트
import randomColor from "randomcolor";

const color = randomColor();
console.log(color);

// node_modules 폴더 또는 package-lock.json 분실 시
// 명령창 > npm i 실행
// package.json 의존성 기준으로 라이브러리 재설치 진행됨




