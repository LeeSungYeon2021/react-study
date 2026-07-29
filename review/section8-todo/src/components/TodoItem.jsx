import "./../components/TodoItem.css"
const TodoItem = ({id, state, content}) => {
    return (
        <div className="TodoItem">            
            <input readOnly checked={state} type="checkbox" />
            <div className="content">{content}</div>
            <div className="date">{new Date().toLocaleDateString()}</div>
            <button>삭제</button>            
        </div>
    )
}

export default TodoItem;