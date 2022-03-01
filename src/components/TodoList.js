import React from "react"
import TodoItem from "./TodoItem"

function TodoList(props) {
  return (
    <ul className="todo-list-container">
      {props.todoList &&
        props.todoList.length &&
        props.todoList.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              key={todo.id}
              changeCheck={props.changeCheck}
              deleteTodo={props.deleteTodo}
            />
          )
        })}
    </ul>
  )
}

export default TodoList
