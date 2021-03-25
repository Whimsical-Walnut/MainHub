const controller = require('../controllers/products.js')
const reviewController = require('../controllers/reviews.js')
const router = require('express').Router();

router.get('/products/*', controller.products);
//reviews API 
router.get('/reviews', reviewController.getReviews)
router.get('/reviews/meta', reviewController.getReviewsMeta)
router.post('/reviews', reviewController.postReviews)
router.put('/reviews/:review_id/report', reviewController.updateReport)
router.put('/reviews/:review_id/helpful', reviewController.updateHelpful)

module.exports = router;