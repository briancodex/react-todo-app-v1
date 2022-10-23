import React, { useState, useEffect } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import { getTodos, createTodo, deleteTodo, patchTodo } from '../api/TodoApi'

function TodoList () {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    getTodos().then(setTodos)
  }, [])

  const addTodo = todo => {
    if (!todo.description || /^\s*$/.test(todo.description)) {
      return
    }

    createTodo(todo).then(response => {
      if (response.status === 201) {
        refreshTodos()
      }
    })
  }

  const refreshTodos = () => {
    getTodos().then(setTodos)
  }

  const updateTodo = newTodo => {
    if (!newTodo.description || /^\s*$/.test(newTodo.description)) {
      return
    }

    patchTodo(newTodo).then(result => {
      refreshTodos()
    })
  }

  const removeTodo = id => {
    todos.filter(todo => todo.id === id)
      .forEach((todo, index) => {
        deleteTodo(todo).then(response => refreshTodos())
      })
  }

  const completeTodo = id => {
    console.log(id)
    todos
      .filter(todo => todo.id === id)
      .map(todo => {
        todo.completed = !todo.completed
        console.log(todo)
        return todo
      })
      .forEach((todo, index) => {
        patchTodo(todo).then(response => {
          refreshTodos()
        })
      })
  }

  return (
    <>
      <h1>What&apos;s the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  )
}

export default TodoList
