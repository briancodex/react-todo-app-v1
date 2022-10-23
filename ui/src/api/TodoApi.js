import axios from 'axios'
import config from '../config'

export const getTodos = async () => {
  try {
    const response = await (await axios.get(config.baseUrl)).data
    return response
  } catch (error) {
    console.error(error)
  }
}

export const createTodo = async todo => await axios.post(config.baseUrl, todo)

export const patchTodo = async todo => await axios.patch(config.baseUrl, todo)

export const deleteTodo = async todo => await axios.delete(config.baseUrl + todo.id)
