import { useState } from "react";


// 함수명 시작에 "use"를 붙여주면, 커스텀 훅으로 자동 인식
function useInput() {
    const [input, setInput] = useState("");

    const onChange = (e) => {
        setInput(e.target.value);
    };

    return [input, onChange];
}

export default useInput;