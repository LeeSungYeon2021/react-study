import { useState, useRef} from 'react';
// useState : 값이 변경되어도 재 렌더링o
// useRef : 값이 변경되어도 재 렌더링x
// useRef로 컴포넌트의 변수 생성하기

const Resister = () => {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    });

    const countRef = useRef(0);
    const inputRef = useRef();
    
    const onChange = (e) => {  
        countRef.current;      
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }
    
    const onSubmit = () => {
        if(input.name === "") {
            // 빈값인 DOM요소에 포커싱 처리
            inputRef.current.focus();
        }
    }

    return (
        <div>            
            <div>
                <input 
                ref={inputRef}
                name="name"
                value={input.name}
                onChange= {onChange} 
                placeholder={"이름"} />

                {input.name}
            </div>

            <div>
                <input 
                type='date'
                name="birth"
                value={input.birth}
                onChange= {onChange} 
                />
                {input.birth}
            </div>

            <div>
                <select 
                name="country"
                value={input.country} 
                onChange={onChange}>
                    <option>한국</option>
                    <option>미국</option>
                    <option>영국</option>                    
                </select>
                {input.country}
            </div>

            <div>
                <textarea name="bio" value={input.bio} onChange={onChange}/>
                {input.bio}
            </div>

            <div>
                <button onClick={onSubmit}>제출</button>
            </div>
        </div>
    )
}

export default Resister;