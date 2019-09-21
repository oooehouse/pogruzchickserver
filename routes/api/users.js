const express = require('express');
const router = express.Router();
const {
  checkUserData,
  registerUser,
  logIn,
  checkEmailPassword,
  checkAuth,
  getUser,
  changeProfile,
  checkUserDataPhone
} = require('../../middleware/users');

//@route    Post api/users
//@desc     Get user by token
//@access   Private
router.get('/', checkAuth, getUser);

//@route    Post api/users
//@desc     Register user
//@access   Private
router.post('/register', checkUserData, registerUser);

//@route    Post api/users
//@desc     Log in user
//@access   Private
router.post('/login', checkEmailPassword, logIn);

//@route    Post api/users
//@desc     Change profile
//@access   Private
router.put('/', checkAuth, checkUserDataPhone, changeProfile);

module.exports = router;
