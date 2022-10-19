const Todo = require("../models/Todo");

exports.createTodo = async todo => {
    const newTodo = new Todo(todo);
    return await Todo.create(newTodo);
}

exports.updateTodo = async todo => {
    return await Todo.findOneAndUpdate({ _id: todo.id }, todo, { new: true });
}

exports.deleteTodo = async todoId => {
    await Todo.deleteOne({ _id: todoId });
}

exports.getTodos = async () => {
    return await Todo.find();
}