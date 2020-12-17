const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    // __dirname = absolute path to our project folder
    // path.join() will build the path both for Linux ('/user) and Windows ('\user) by detecting the operating system
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = router;