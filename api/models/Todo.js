import mongooseInstance from '../config/mongodb.config.js';

const mongoose = mongooseInstance.mongoose;

const TodoSchema = mongoose.Schema({
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

TodoSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

TodoSchema.set('toJSON', {
    virtuals: true
});

const Todo = mongoose.model(
    "Todo",
    TodoSchema,
    "Todos"
);

export default Todo;