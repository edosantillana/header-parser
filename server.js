
var express = require('express');
var user = require('express-useragent');
var app = express();
var port = process.env.PORT || 8080;
var api = "/api/whoami";

app.use(user.express());

app.listen(port, function(){
  console.log('App running!');
});

app.get(api, function(request, response) {
  var lang = request.acceptsLanguages();
  var system = request.useragent.browser + '; ' + request.useragent.os;
  var ip = request.ip;

  response.json({"ipaddress": ip, "language": lang[0], "software": system});
});
