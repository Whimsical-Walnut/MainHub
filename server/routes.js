const controller = require('../controllers/products.js')
const reviewController = require('../controllers/reviews.js')
const router = require('express').Router();

router.get('/products/*', controller.products);
//reviews API 
router.get('/reviews/*', reviewController.getReview)
router.post('/reviews/*', reviewController.postReview)
router.put('/reviews/*', reviewController.putReview)

module.exports = router;