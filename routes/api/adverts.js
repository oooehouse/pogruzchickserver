const express = require('express');
const router = express.Router();
const { someFunction } = require('../../middleware/adverts');

//@route    Post api/users
//@desc     Register user
//@access   Private
router.post('/', someFunction);

//@route    Post api/users
//@desc     Register user
//@access   Private
router.post('/login', someFunction);

module.exports = router;
