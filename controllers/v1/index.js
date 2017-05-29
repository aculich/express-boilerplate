'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).end('hello world');
});

module.exports = router;
