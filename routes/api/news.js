const express = require('express');
const router = express.Router();
const {
  createNews,
  getNews,
  changeNews,
  deleteNews
} = require('../../middleware/news');

//@route    Post api/news
//@desc     Add news
//@access   Private
router.post('/', createNews);

//@route    Get api/news
//@desc     Get all news
//@access   Public
router.get('/', getNews);

//@route    Change api/news
//@desc     Change news
//@access   Private
router.put('/:id', changeNews);

//@route    Delete api/news
//@desc     Delete news
//@access   Private
router.delete('/', deleteNews);

module.exports = router;
