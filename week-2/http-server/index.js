const express = require('express')
const bodyParser = require('body-parser')
const port = 3000

const app = express()

const todos = []

app.use(bodyParser.json())

app.post('/', function (req, res) {
  console.log(req.body)
  res.send('<b>Hello Express!</b>')
})

app.post('/todos', function (req, res) {
  const todo = req.body
  todos.push(todo)
  res.send(todos)
  res.status(200)
})

app.post('/todos/:id', function (req, res) {
  const id = req.params
  const todo = todos.find((todo) => todo.id === id)
  res.send(todo)
  res.status(200)
})

app.listen(port, function () {
  console.log(`App listening at ${port}`)
})
