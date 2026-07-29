import "./../components/Editor.css";
import { useState } from "react";

const Editor = ({onCreate}) => {
    const [content, setContent] = useState("");
    const onChange = (e) => {
        console.log(e.target.value)
        setContent(e.target.value);
    }

    const onSubmit = () => {
        console.log('content', content)
        onCreate(content)
    }

    return (
        <div className="Editor">
            <input 
            value={content}
            onChange={onChange} 
            placeholder="새로운 Todo" 
            />
            <button onClick={onSubmit}>추가</button>
        </div>
    )
};

export default Editor;