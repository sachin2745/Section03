const express = require('express');
const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);
    res.send('post add operation');
});

router.get('/getall', (req, res) => {
    res.send('post read operation');
});

module.exports = router;