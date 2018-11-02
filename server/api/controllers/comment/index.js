const express = require('express');
const router = express.Router();
const controller = require('./comment.controller');

router.post('/add', controller.add);

module.exports = router;