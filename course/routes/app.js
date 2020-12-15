// const http = require('http');

const express = require('express');

const app = express();

app.use('/add-product', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>My "Add Product" Page</h1>');
});

app.use('/', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Xpress!</h1>');
});

app.listen(3000); 
// const server = http.createServer(app);
// server.listen(3000);
