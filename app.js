var http        = require('http'),
    forwardings = require('./redirects');

http.createServer(function (req, res) {
  var hostname = req.headers.host.replace(/:.*/, "");
      url      = req.url,
      location = null;

  // Find path under requested domain
  if (typeof forwardings.url[hostname] != 'undefined') {
    if (typeof forwardings.url[hostname][url] != 'undefined') {
      location = forwardings.url[hostname][url];
    }
  }

  // Find path under wildcard-domain
  if (location == null && typeof forwardings.url['*'] != 'undefined') {
    if (typeof forwardings.url['*'][url] != 'undefined') {
      location = forwardings.url['*'][url];
    }
  }

  // Find full domain redirect
  if (location === null && typeof forwardings.domain[hostname] != 'undefined') {
    location = forwardings.domain[hostname];
  }
  
  if (location !== null) {
    res.writeHead(302, { 'Location': location });
    return res.end();
  }
  
  res.writeHead(404);
  res.end("Hostname -> URL does not found!");
}).listen(process.env.PORT || 5000);