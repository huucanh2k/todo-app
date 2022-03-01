import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axiosInstance from "../utils/customAxios"

const axios = require("axios")

export default function Todo() {
  const [title, setTitle] = useState("")
  const [completed, setCompleted] = useState(false)
  const params = useParams()

  const onSubmit = async (e) => {
    e.preventDefault()
    const todo = {
      id: params.todoId,
      title: title,
      completed: completed,
    }
    await axiosInstance.put(params.todoId, todo)
  }

  useEffect(async () => {
    const id = params.todoId

    const res = await axiosInstance.get(id)

    setTitle(res.data.title)
    setCompleted(res.data.completed)
  }, [])

  return (
    <form className="form-container" onSubmit={onSubmit}>
      <input
        type="text"
        className="input-text"
        placeholder="Enter name todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="checkbox"
        name="completed"
        id="completed"
        checked={completed}
        onChange={(e) => {
          setCompleted(e.target.checked)
        }}
      />
      <button type="submit" className="btn-submit">
        Edit
      </button>
    </form>
  )
}
