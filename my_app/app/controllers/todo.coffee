Todo = module.exports = Spine.Controller.create
  init: ->
    Todo.bind("refresh page", this.proxy(this.render))
