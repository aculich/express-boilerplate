'use strict';

const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.status(200).end('hello world');
});

module.exports = router;
