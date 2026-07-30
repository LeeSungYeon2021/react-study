import { useState, useRef } from "react";
import "./../components/Editor.css";

const Editor = ({onCreate}) => {
    const [content, setContent] = useState("");
    const contentRef = useRef();

    // 입력값 변경 이벤트
    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    // 엔터키 이벤트
    const onKeyDown = (e) => {
        if(e.keyCode === 13) onSubmit();
    }   

    // 추가 버튼 이벤트
    const onSubmit = () => {
        if(content === "") {
            // 빈 값 입력시 포커싱
            contentRef.current.focus();
            return;
        }

        // 부모컴포넌트에 전달 (App.jsx)
        onCreate(content);
        // 추가 후 입력란 초기화
        setContent("");        
    }

    return (
        <div className="Editor">
            <input 
            ref={contentRef}
            value={content}
            onKeyDown={onKeyDown}
            onChange={onChangeContent}
            placeholder="새로운 Todo.."/>
            <button onClick={onSubmit}>추가</button>
        </div>
    );
};

export default Editor;