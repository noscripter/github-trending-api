var log = require('./config/logger');
var trendingApi = require('./routes/trending');

var PORT = process.env.PORT || 3000;

if(!module.main) {
  var express = require('express');
  var expressBunyanLogger = require('express-bunyan-logger');
  var app = express();

  trendingApi.enableLog = true;

  app.use(expressBunyanLogger());
  app.use(trendingApi);

  app.listen(PORT, function() {
    log.info('Listening on port ' + PORT);
  });
}

exports = module.exports = trendingApi;
