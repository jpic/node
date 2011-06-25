class Main
  constructor: (@name) ->
    alert @name

  hello: ->
    this.constructor(@name)

document.Main = new Main "sammy"
