const express = require('express');
const router = express.Router();

router.use('/publication', require('./controllers/publication'));
router.use('/like', require('./controllers/like'));
router.use('/comment', require('./controllers/comment'));
router.use('/follower', require('./controllers/follower'));

module.exports = router;