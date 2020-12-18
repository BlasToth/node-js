const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log(req.url);
    res.send('<h1>Hello</h1>'); // determine the content type automatically and set the header
});

app.get('/old', (req, res) => {
    res.redirect(301, '/new');
});

app.get('/new', (req, res) => {
    res.send('<h2>NEW</h2>');
});

app.listen(3000, (err) => {
    if(err){
        console.log("There was a problem");
        return;
    }
    console.log("Listening on port 3000");
});