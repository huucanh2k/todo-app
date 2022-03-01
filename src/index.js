import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Blog from "./components/Blog"
import DayInfor from "./components/DayInfor"
import TodoManage from "./components/TodoManage"
import Todo from "./components/Todo"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="blog" element={<Blog />}></Route>
          <Route path="" element={<Navigate to="todos" />}></Route>
          <Route path="day" element={<DayInfor />}></Route>
          <Route path="todos" element={<TodoManage />}></Route>
          <Route path="todo/:todoId" element={<Todo />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
reportWebVitals()
