import React from 'react'
import "./todo.css"

export default function Todo({ todo, toggleTodo }) {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }

    return (
        <div className="todo">
            <label className="todo-label">
                <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
                {todo.name}
            </label>
        </div >
    )
}

// CSS in JS
/* <label style={todoStyle} className="todo-label"></label> */
// const todoStyle = {
//     fontWeight: 600,
//     color: 'red',
// }