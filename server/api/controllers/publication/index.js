const express = require('express');
const router = express.Router();
const controller = require('./publication.controller');

router.post('/add', controller.add);

module.exports = router;