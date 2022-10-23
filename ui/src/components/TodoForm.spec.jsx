import React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react';
import TodoForm from './TodoForm';

beforeEach(cleanup);

const onSubmitFn = jest.fn();

describe("<TodoForm />", () => {
    afterEach(jest.clearAllMocks);

    it('Renders <TodoForm />', () => {
        const { queryByTestId } = render(<TodoForm onSubmit={onSubmitFn} />);
        expect(queryByTestId("todo-form")).toBeTruthy();
    });

    it('Renders add ToDo form', () => {
        const { queryByTestId } = render(<TodoForm onSubmit={onSubmitFn} />);
        expect(queryByTestId("new-input")).toBeTruthy();
        expect(queryByTestId("edit-input")).toBeFalsy();
    });

    it('Click update calls onSubmitFn', () => {
        const { queryByTestId } = render(<TodoForm onSubmit={onSubmitFn} />);
        fireEvent.click(queryByTestId("add-button"));
        expect(onSubmitFn).toBeCalled();
    });

    it('Renders edit ToDo form', () => {
        const edit = { id: "myid", value: "test" }
        const { queryByTestId } = render(<TodoForm onSubmit={onSubmitFn} edit={edit} />);
        expect(queryByTestId("new-input")).toBeFalsy();
        expect(queryByTestId("edit-input")).toBeTruthy();
        expect(queryByTestId("edit-input").value).toBe(edit.value);
    });

    it('Click update calls onSubmitFn', () => {
        const edit = { id: "myid", value: "test" }
        const { queryByTestId } = render(<TodoForm onSubmit={onSubmitFn} edit={edit} />);
        fireEvent.click(queryByTestId("update-button"));
        expect(onSubmitFn).toBeCalled();
    });
});