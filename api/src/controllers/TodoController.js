import * as TodoService from '../services/TodoService.js'
import { StatusCodes } from 'http-status-codes'

export const createTodo = async (request, response) => {
  try {
    await TodoService.createTodo(request.body)
    response.status(StatusCodes.CREATED)
    response.json()
  } catch (err) {
    response.error(err)
  }
}

export const getTodos = async (request, response) => {
  const todos = await TodoService.getTodos()
  response.json(todos)
  response.status(StatusCodes.OK)
}

export const deleteTodo = async (request, response) => {
  await TodoService.deleteTodo(request.params.id)
  response.status(StatusCodes.NO_CONTENT)
  response.send()
}

export const updateTodo = async (request, response) => {
  const todo = await TodoService.updateTodo(request.body)
  delete todo._id
  delete todo.__v
  response.json(todo)
  response.status(StatusCodes.OK)
}
