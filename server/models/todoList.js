const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoListSchema = new Schema({
  name: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
  },
  todos: {
    type: Array,
  },
});

const todoList = mongoose.model("todoList", todoListSchema);

module.exports = todoList;
