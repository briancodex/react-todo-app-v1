import axios from "axios";

const baseUrl = "http://localhost:8080/todo/"

export const getTodos = async () => {
    try {
        let response = await (await axios.get(baseUrl)).data;
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const createTodo = async todo => await axios.post(baseUrl, todo);

export const patchTodo = async todo => await axios.patch(baseUrl, todo);

export const deleteTodo = async todo => await axios.delete(baseUrl + todo.id);