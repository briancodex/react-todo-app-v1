const router = require("express").Router();
const todoService = require("../services/TodoService");
const events = require("../logging/Events");


router.post("/", async (request, response) => {
    console.log(events.POST_REQUEST_START);
    await todoService.createTodo(request.body);
    response.status(201);
    response.json()
    console.log(events.POST_REQUEST_DONE);
});

router.get("/", async (request, response) => {
    console.log(events.GET_REQUEST_START);
    let todos = await todoService.getTodos();
    response.json(todos);
    response.status(200);
    console.log(events.GET_REQUEST_DONE);
});

router.delete("/:id", async (request, response) => {
    console.log(request.params.id);
    await todoService.deleteTodo(request.params.id);
    response.status(204);
    response.send();
});

router.patch("/", async (request, response) => {
    let todo = await todoService.updateTodo(request.body);
    delete todo._id
    delete todo.__v
    response.json(todo);
    response.status(200);
});

module.exports = router;