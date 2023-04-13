const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  // Handle requests for index.html
  if (req.url === '/' || req.url === '/index.html') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
      if (err) {
        console.error(err);
        res.statusCode = 500;
        res.end('Internal server error');
      } else {
        res.end(data);
      }
    });
  }
  // Handle requests for calculator.js
  else if (req.url === '/calculator.js') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/javascript');
    fs.readFile(path.join(__dirname, 'calculator.js'), (err, data) => {
      if (err) {
        console.error(err);
        res.statusCode = 500;
        res.end('Internal server error');
      } else {
        res.end(data);
      }
    });
  }
  // Handle all other requests with a 404 error
  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Page not found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
