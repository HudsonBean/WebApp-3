const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoList = new Schema({
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
