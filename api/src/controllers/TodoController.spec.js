import { StatusCodes } from 'http-status-codes'

import { createTodo } from './TodoController'
import * as TodoService from '../services/TodoService.js'

const errorString = 'its gone wrong!'

jest.mock('../services/TodoService.js', () => ({
  createTodo: jest.fn().mockImplementation((body) => {
    if (body === 'ERROR') {
      throw new Error(errorString)
    }
    return body
  }),
  getTodos: jest.fn(),
  deleteTodo: jest.fn(),
  updateTodo: jest.fn()
}))

const mockSuccessExpressRequest = {
  body: {
    description: 'My new Todo'
  }
}

const mockErrorExpressRequest = {
  body: 'ERROR'
}

const mockExpressResponse = {
  json: jest.fn(),
  send: jest.fn(),
  status: jest.fn(),
  error: jest.fn()
}

describe('Controllers > TodoController', () => {
  describe('createTodo', () => {
    it('should successfully call the TodoService and return back a created status', async () => {
      // arrange

      // act
      await createTodo(mockSuccessExpressRequest, mockExpressResponse)

      // assert
      expect(TodoService.createTodo).toHaveBeenCalledWith(mockSuccessExpressRequest.body)
      expect(mockExpressResponse.json).toHaveBeenCalledWith()
      expect(mockExpressResponse.status).toHaveBeenCalledWith(StatusCodes.CREATED)
    })

    it('should handle errors', async () => {
      // arrange

      // act
      await createTodo(mockErrorExpressRequest, mockExpressResponse)

      // assert
      expect(TodoService.createTodo).toHaveBeenCalledWith(mockErrorExpressRequest.body)
      expect(mockExpressResponse.error).toHaveBeenCalledWith(Error(errorString))
    })
  })
})
