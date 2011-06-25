var xml = require("../lib/o3-xml"),
    doc,
    xmlData;

// example api key
const LASTFM_API_KEY='b25b959554ed76058ac220b7b2e0a026';

function get_tree(method, data) {
  var tree,
      lastfm_options = {
        host: 'ws.audioscrobbler.com',
        path: '/2.0/?method=track.search&track='+q+'&api_key='+LASTFM_API_KEY+'&format=json',
        port: 80,
      };

  http.get(options, function(res) {
    
  }).on('error', function(e) {
  });
};
