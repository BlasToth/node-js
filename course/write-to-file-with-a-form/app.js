const http = require("http");
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Postman</title></head>");
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">SEND</button></form></body>');
    res.write("</html>");
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    fs.writeFileSync('message.txt', 'DUMMY');
    // res.writeHead(302, {})
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }

  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page by Node</title></head>");
  res.write(
    "<body><h1>Hello! This is Sparta! from a Node.js server...</h1></body>"
  );
  res.write("</html>");
  res.end();
});

server.listen(3000);
