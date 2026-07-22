import  { useState} from 'react';
// State로 사용자 입력 관리하기2
// 1버전 > 문법 통일하여 진행
const Resister = () => {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    });

    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }
    

    return (
        <div>
            <div>
                <input 
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
        </div>
    )
}

export default Resister;