import React from 'react'
import Todo from './Todo'
import { cleanup, fireEvent, render } from '@testing-library/react';

beforeEach(cleanup);

const completeTodo = jest.fn();
const removeTodo = jest.fn();
const updateTodo = jest.fn();

const todos = [{ id: "myid", description: "test", completed: false }]

describe('<Todo />', () => {
  afterEach(jest.clearAllMocks);

  it('<Todo /> renders', () => {
    const { queryByTestId } = render(<Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />);
    expect(queryByTestId('todos-container')).toBeTruthy();
    expect(queryByTestId("todo-myid")).toBeTruthy();
  });

  it('Click todo completes todo', () => {
    const { queryByTestId } = render(<Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />);
    fireEvent.click(queryByTestId("todo-myid"));
    expect(completeTodo).toHaveBeenCalled();
  });

  it('Click delete todo calls delete function', () => {
    const { queryByTestId } = render(<Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />);
    fireEvent.click(queryByTestId("todo-delete-myid"));
    expect(removeTodo).toHaveBeenCalled();
  });

  it('Click edit todo calls edit function', () => {
    const { queryByTestId } = render(<Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />);
    fireEvent.click(queryByTestId("todo-edit-myid"));
    expect(queryByTestId("edit-input")).toBeTruthy();
    fireEvent.click(queryByTestId("update-button"));
    expect(updateTodo).toHaveBeenCalled();
  });
})
