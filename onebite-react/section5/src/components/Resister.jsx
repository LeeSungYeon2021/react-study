import  { useState} from 'react';
// State로 사용자 입력 관리하기1
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개
const Resister = () => {

    const [name, setName] = useState("이름");
    const [birth, setBirth] = useState("");
    const [country, setCountry] = useState("");
    const [bio, setBio] = useState("");

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeBirth = (e) => {
        setBirth(e.target.value);
    }

    const onChangeCountry = (e) => {        
        setCountry(e.target.value);
    }

    const onChangeBio = (e) => {        
        setBio(e.target.value);
    }

    return (
        <div>
            <div>
                <input 
                value={name}
                onChange= {onChangeName} 
                placeholder={"이름"} />
            </div>

            <div>
                <input 
                type='date'
                value={birth}
                onChange= {onChangeBirth} 
                />
            </div>

            <div>
                <select value={country} onChange={onChangeCountry}>
                    <option>한국</option>
                    <option>미국</option>
                    <option>영국</option>                    
                </select>
                {country}
            </div>

            <div>
                <textarea value={bio} onChange={onChangeBio}/>
            </div>
        </div>
    )
}

export default Resister;