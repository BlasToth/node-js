/* 
1. Spin up a Node.js-driven Server (on port 3000)
2. Handle two Routes: "/" and "/users"
    - Return some greeting text on "/"
    - Return a list of dummy users (e.g. <ul><li>User1</li></ul>)
3. Add a form with a "username" <input> to the "/" page and submit a POST request to "/create-user" upon a button click
4. Add the "/create-user" route and parse the incoming data (i.e. the username) and simply log it to the console
*/

const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body><h1>Hey there! Welcome to the Node World!</h1><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body><ul><li>John Doe</li><li>John Doeson</li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
});

server.listen(3000);