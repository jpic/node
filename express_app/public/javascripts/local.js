(function() {
  var Main;
  Main = (function() {
    function Main(name) {
      this.name = name;
      this.hello;
    }
    Main.prototype.hello = function() {
      return alert(this.name);
    };
    return Main;
  })();
  document.Main = new Main("sammy");
}).call(this);
