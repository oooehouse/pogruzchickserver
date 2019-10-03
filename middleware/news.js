const { queryCreateNews, queryNews } = require('../repositories/news');

exports.createNews = async (req, res) => {
  try {
    const news = await queryCreateNews(req.body);
    res.status(200).send(news);
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: `Error: ${error}` });
  }
};

exports.getNews = async (req, res) => {
  try {
    const news = await queryNews(req.body);
    res.status(200).send(news);
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: `Error: ${error}` });
  }
};

exports.changeNews = async (req, res) => {
  try {
    res.status(200).send({ msg: 'OK' });
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: `Error: ${error}` });
  }
};

exports.deleteNews = async (req, res) => {
  try {
    res.status(200).send({ msg: 'OK' });
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: `Error: ${error}` });
  }
};
