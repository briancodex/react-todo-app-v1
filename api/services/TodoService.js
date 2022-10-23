import Todo from '../models/Todo.js'

export const createTodo = async todo => {
  const newTodo = new Todo(todo)
  return await Todo.create(newTodo)
}

export const updateTodo = async todo => {
  return await Todo.findOneAndUpdate({ _id: todo.id }, todo, { new: true })
}

export const deleteTodo = async todoId => {
  await Todo.deleteOne({ _id: todoId })
}

export const getTodos = async () => {
  return await Todo.find()
}
