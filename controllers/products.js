const axios = require('axios');
const path = 'http://localhost:3001';

module.exports = {
  products: (req, res, next) => {
    axios(path + req.url)
    .then(({ data }) => {
      res.send(data);
      next();
    })
    .catch((err) => {
      res.status(400);
      next();
    })
  }
}
