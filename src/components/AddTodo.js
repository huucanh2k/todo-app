import React, { useRef, useState } from "react"

function AddTodo(props) {
  const [title, setTitle] = useState("")
  const button = useRef(null)
  const onSubmit = (e) => {
    e.preventDefault()
    props.addTodo(title)
    setTitle("")
  }

  return (
    <form className="form-container" onSubmit={onSubmit}>
      <input
        type="text"
        className="input-text"
        placeholder="Enter name todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            // button.dispatchEvent(new Event("click"))
            button.current.click()
          }
        }}
      />
      <button type="submit" className="btn-submit" ref={button}>
        Add
      </button>
    </form>
  )
}

export default AddTodo
