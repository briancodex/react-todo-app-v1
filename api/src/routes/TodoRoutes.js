import express from 'express'
import * as TodoController from '../controllers/TodoController.js'

const router = express.Router()

router.post('/', TodoController.createTodo)
router.get('/', TodoController.getTodos)
router.delete('/:id', TodoController.deleteTodo)
router.patch('/', TodoController.updateTodo)

export default router
