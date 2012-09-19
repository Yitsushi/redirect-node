var http        = require('http'),
    forwardings = require('./redirects');

http.createServer(function (req, res) {
  var hostname = req.headers.host.replace(/:.*/, "");
  if (typeof forwardings[hostname] != 'undefined') {
    res.writeHead(302, {
      'Location': forwardings[hostname]
    });
    res.end();
    return true;
  }
  
  res.writeHead(404);
  res.end("Hostname -> URL does not found!");
}).listen(process.env.PORT || 5000);