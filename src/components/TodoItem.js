import React from "react"
import { Link } from "react-router-dom"
import Logger from "./HOC/Logger"

function TodoItem(props) {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        className="checkbox"
        checked={props.todo.completed}
        onChange={() => props.changeCheck(props.todo.id)}
      />
      <span className={props.todo.completed === true ? "completed" : ""}>
        {props.todo.title}
      </span>
      <div className="btn-container">
        <Link to={`/todo/${props.todo.id}`}>
          <span className="btn-edit">
            <i className="fa-solid fa-pen-to-square"></i>
          </span>
        </Link>
        <span
          className="btn-delete"
          onClick={() => props.deleteTodo(props.todo.id)}
        >
          X
        </span>
      </div>
    </li>
  )
}

// export default Logger(TodoItem)
export default TodoItem
