const mongoose = require("../config/mongodb.config").mongoose;

var todoSchema = mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        required: false,
        default: false
    }
});

todoSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

todoSchema.set('toJSON', {
    virtuals: true
});

const Todo = mongoose.model(
    "Todo",
    todoSchema,
    "Todos"
);

module.exports = Todo;