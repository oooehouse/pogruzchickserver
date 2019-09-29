const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const {
  findUser,
  updateUser,
  addMyWishQuery,
  registerUser,
  getUserWithoutPassword
} = require('../repositories/user');

require('dotenv').config();

exports.checkAuth = (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    res.status(401).json({ msg: 'no token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JwtSecret);
    req.user = decoded.user;
    next();
  } catch (err) {
    return res.status(400).send({ msg: 'Error with user authorization' });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await getUserWithoutPassword(req.user.id);
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.checkEmailPassword = [
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password is required').exists()
];

exports.logIn = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    const user = await findUser(email);

    if (!user) {
      return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
    }

    // Return jsonwebtoken

    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      process.env.JwtSecret,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token, user });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error. Register');
  }
};

exports.checkUserData = [
  check('name', 'Name is required')
    .not()
    .isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check(
    'password',
    'Please include a password with 6 or more characters'
  ).isLength({ min: 6 })
];

exports.registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { email } = req.body;

  try {
    let user = await findUser(email);
    if (user) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'User already exists!!!' }] });
    }

    user = await registerUser(req.body);

    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      process.env.JwtSecret,
      { expiresIn: 36000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token, user });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error. Register');
  }
};

exports.checkUserDataPhone = [
  check('name', 'Name is required')
    .not()
    .isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('phone', 'Please include a phone with 9 or more numbers').isLength({
    min: 9
  })
];

exports.changeProfile = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  try {
    const data = { ...req.body, _id: req.user.id };
    const user = await updateUser(data);
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error. Register');
  }
};

exports.addMyWish = async (req, res) => {
  try {
    const user = await addMyWishQuery({
      flatId: req.body.payload,
      userId: req.user.id
    });
    res.status(200).json(user.wishList);
  } catch (err) {
    console.error(err.message);
    res.status(400).send('Server error. Add flat');
  }
};

exports.someFunction = (req, res) => {
  res.status(200).send({ msg: 'test function' });
};
