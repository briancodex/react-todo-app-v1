import express from 'express'
import * as TodoService from '../services/TodoService.js'

const router = express.Router()

router.post('/', async (request, response) => {
  await TodoService.createTodo(request.body)
  response.status(201)
  response.json()
})

router.get('/', async (request, response) => {
  const todos = await TodoService.getTodos()
  response.json(todos)
  response.status(200)
})

router.delete('/:id', async (request, response) => {
  await TodoService.deleteTodo(request.params.id)
  response.status(204)
  response.send()
})

router.patch('/', async (request, response) => {
  const todo = await TodoService.updateTodo(request.body)
  delete todo._id
  delete todo.__v
  response.json(todo)
  response.status(200)
})

export default router
