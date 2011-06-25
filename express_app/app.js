/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var lastfm = require('lastfm');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'your secret here' }));
  app.use(express.compiler({ src: __dirname + '/public', enable: ['sass'] }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// ensure all client has a playlist
app.all('/', function(req, res, next){
  if (!req.session.playlist) {
    req.session.playlist = {
      tracks:   [],
      history:  [],
      previous: false,
      current:  false,
      next:     false,
    }
  }
  return next();
});

// Routes

app.get('/', function(req, res){
  res.render('index', {
    title: 'Express',
    q: ''
  });
});

app.post('/', function(req, res){
  var q, lastfm_options;
  q = req.body.q;

  res.render('index', {
    title: 'Express',
    q: q
  });
});

app.post('/track/add/', function(req, res){
  var track;

  track = {
    'title': req.body.title,
    'artist': req.body.artist,
    'source': req.body.source
  }
  req.session.playlist.tracks.append(track);
  return JSON.stringify(req.session);
})

app.listen(3000);
console.log("Express server listening on port %d", app.address().port);
