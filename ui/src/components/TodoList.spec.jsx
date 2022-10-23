import React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react';
import TodoList from './TodoList'

beforeEach(cleanup);

const onSubmitFn = jest.fn();

jest.mock('../api/TodoApi.js', () => ({
    getTodos: jest.fn().mockImplementation(() => Promise.resolve(
        [{
            id: "myid",
            description: "test",
            completed: "false"
        }]
    )),
    createTodo: jest.fn().mockImplementation(todo => Promise.resolve(
        {
            status: 201
        }
    )),
    patchTodo: jest.fn().mockImplementation(todo => Promise.resolve()),
    deleteTodo: jest.fn().mockImplementation(todo => Promise.resolve())
}));

describe("<TodoList />", () => {
    afterEach(jest.clearAllMocks);

    it('Renders <TodoList />', () => {
        const { queryByTestId } = render(<TodoList />);
    });
});