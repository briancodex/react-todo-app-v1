import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '')

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (props.edit) {
      props.onSubmit({
        id: props.edit.id,
        description: input
      })
    } else {
      props.onSubmit({
        description: input
      })
    }
    setInput('')
  }

  return (
    <form onSubmit={handleSubmit} className='todo-form' data-testid='todo-form'>
      {props.edit
        ? (
          <>
            <input
              placeholder='Update your item'
              value={input}
              onChange={handleChange}
              name='text'
              ref={inputRef}
              className='todo-input edit'
              data-testid="edit-input"
            />
            <button onClick={handleSubmit} className='todo-button edit' data-testid="update-button">
              Update
            </button>
          </>
        )
        : (
          <>
            <input
              placeholder='Add a todo'
              value={input}
              onChange={handleChange}
              name='text'
              className='todo-input'
              ref={inputRef}
              data-testid="new-input"
            />
            <button onClick={handleSubmit} className='todo-button' data-testid="add-button">
              Add todo
            </button>
          </>
        )}
    </form>
  )
}

export default TodoForm
