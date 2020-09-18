import React from "react";

const Todo = ({text,list,todoLists,setTodoLists}) => {
    const clickHandler = () => {
        setTodoLists(todoLists.filter(el => el.id !== list.id)) 
    }
    const handleChange = () => {
        setTodoLists(todoLists.map((item) => {
            if (item.id === list.id) {
                item.completed = !item.completed
            }
            return item
        }))
    }
    return (
        <div>
            <li className={list.completed ? "checked" : null} onClick={handleChange}>{text}</li>
            <span type="button" className="close" onClick={clickHandler}>x</span>
        </div>
    )
    
}

export default Todo;