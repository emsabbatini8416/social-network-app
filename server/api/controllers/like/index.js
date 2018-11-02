const express = require('express');
const router = express.Router();
const controller = require('./like.controller');

router.post('/add', controller.addLike);
router.post('/remove', controller.removeLike);

module.exports = router;