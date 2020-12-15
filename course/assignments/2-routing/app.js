const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log("First log");
//     next();
// });

// app.use((req, res, next) => {
//     console.log("Second log");
//     res.send("<p>First two tasks solved</p>");
// });
app.use('/users', (req, res, next) => {
    console.log("/users middleware");
    res.send('<p>The middleware that only handles /users</p>')
});

app.use('/', (req, res, next) => {
    console.log("/ middleware");
    res.send('<p>The middleware that only handles /</p>');
});


app.listen(3000);
