const express = require('express');
const router = express.Router();
const {
  someFunction,
  createAdvert,
  getAdverts
} = require('../../middleware/adverts.js');

//@route    Post api/adverts
//@desc     Add advert
//@access   Private
router.post('/', createAdvert);

//@route    Delete api/adverts
//@desc     Delete advert
//@access   Private
router.delete('/', someFunction);

//@route    Get api/adverts
//@desc     Get adverts
//@access   Public
router.get('/', getAdverts);

module.exports = router;
