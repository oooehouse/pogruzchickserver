const { queryCreateAdvert, queryAdverts } = require('../repositories/advert');

exports.someFunction = (req, res) => {
  res.status(200).send({ msg: 'test function' });
};

exports.createAdvert = async (req, res) => {
  try {
    const advert = await queryCreateAdvert(req.body);
    res.status(200).json(advert);
  } catch (error) {
    console.error(error);
    res.status(400).send({ msg: 'Create advert error' });
  }
};

exports.getAdverts = async (req, res) => {
  try {
    const adverts = await queryAdverts();
    res.status(200).json(adverts);
  } catch (error) {
    console.error(error);
    res.status(400).send({ msg: 'Create advert error' });
  }
};
