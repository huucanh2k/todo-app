import React, { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import AddTodo from "./AddTodo"
import Logger from "./HOC/Logger"
import Header from "./layout/Header"
import TodoList from "./TodoList"
import { v4 as uuidv4 } from "uuid"

// const axios = require("axios")
import axiosInstance from "../utils/customAxios"

function TodoManage() {
  const [todos, setTodos] = useState([])

  useEffect(async () => {
    await fetchTodos()
  }, [])

  const fetchTodos = async () => {
    // const res = await axios.get(`http://localhost:3000/todos`)
    const res = await axiosInstance.get("")
    setTodos(res.data)
  }

  const onChangeCheck = (id) => {
    let newState = [...todos]
    newState = newState.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed
      }
      return item
    })
    setTodos(newState)
  }
  const onDeleteTodo = async (id) => {
    // let newState = [...todos]
    // newState = newState.filter((item) => {
    //   return item.id !== id
    // })
    // setTodos(newState)
    await axiosInstance.delete(id)
    await fetchTodos()
  }
  const onAddTodo = async (title) => {
    const todo = {
      title: title,
      completed: false,
      id: uuidv4(),
    }
    // console.log(todo)
    // let newState = [...todos]
    // newState = [...newState, todo]
    // setTodos(newState)
    await axiosInstance.post("", todo)
    await fetchTodos()
  }

  return (
    <>
      <AddTodo addTodo={onAddTodo} />
      <TodoList
        todoList={todos}
        changeCheck={onChangeCheck}
        deleteTodo={onDeleteTodo}
      />
    </>
  )
}

export default Logger(TodoManage)
