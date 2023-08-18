require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(process.env.PORT);

//Models
const todoList = require("./models/todoList");
//Routing
//todos
//GET
app.get("/todos", async (req, res) => {
  //Get data
  const data = await todoList.find();
  //Response
  res.json({ todoLists: data });
});
app.get("/todos/:id", async (req, res) => {
  //Get data
  const data = await todoList.findById(req.params.id);
  //Response
  res.json({ todoLists: data });
});
//POST
app.post("/todos/new", (req, res) => {
  //Post data
  const data = new todoList({
    name: "",
    date: new Date(),
    todos: [],
  });
  data.save();
  //Response
  res.json({ todoLists: data });
});
//PATCH
app.patch("/todos/update/:id", async (req, res) => {
  //Patch data
  const data = await todoList.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    todos: req.body.todos,
  });
  //Patch data
  res.json({ todoLists: data });
});
