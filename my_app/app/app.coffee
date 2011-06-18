Todo = require('controllers/todo')

module.exports = Spine.Controller.create
  elements:
    "#item": "item"

  init: ->
    this.todo = Todo.init(el: this.item)
