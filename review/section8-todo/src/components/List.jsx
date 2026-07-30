import { useState } from "react";
import "./../components/List.css";
import TodoItem from "./TodoItem";

const List = ({todo}) => {
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const getFilteredData = () => {
        return todo.filter((item) =>
            item.content.toLowerCase().includes(search.toLocaleLowerCase())
        );
    }

    const filterData = getFilteredData();

    return (
        <div className="List">
            <h3>Todo List</h3>
            <section>
                <input 
                value={search}
                onChange={onChangeSearch}
                placeholder="검색어를 입력하세요." />
                <div>
                    {filterData.map((item) => {
                        return <TodoItem key={item.id} {...item}/>
                    })}
                </div>                
            </section>
        </div>
    )
};

export default List;