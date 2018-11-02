const express = require('express');
const router = express.Router();
const controller = require('./follower.controller');

router.post('/add', controller.add);
router.post('/remove', controller.remove);

module.exports = router;