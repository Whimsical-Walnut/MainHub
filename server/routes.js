const controller = require('../controllers/products.js')
const router = require('express').Router();

router.get('/products/*', controller.products);

module.exports = router;