import React, { useState } from 'react'
import PropTypes from 'prop-types'

import TodoForm from './TodoForm'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  })

  const submitUpdate = value => {
    updateTodo(value)
    setEdit({
      id: null,
      value: ''
    })
  }

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }

  return todos.map((todo, index) => (
    <div
      className={todo.completed ? 'todo-row complete' : 'todo-row'}
      key={index}
      data-testid="todos-container"
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)} data-testid={"todo-" + todo.id}>
        {todo.description}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
          data-testid={"todo-delete-" + todo.id}
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.description })}
          className='edit-icon'
          data-testid={"todo-edit-" + todo.id}
        />
      </div>
    </div>
  ))
}

Todo.propTypes = {
  todos: PropTypes.any,
  completeTodo: PropTypes.any,
  removeTodo: PropTypes.any,
  updateTodo: PropTypes.any
}

export default Todo
