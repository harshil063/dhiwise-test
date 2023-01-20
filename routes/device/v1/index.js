const express =  require('express');
const router =  express.Router();
router.use('/device/auth',require('./auth'));
router.use(require('./tagsRoutes'));
router.use(require('./review_statusRoutes'));
router.use(require('./reviewsRoutes'));
router.use(require('./product_variationsRoutes'));
router.use(require('./productRoutes'));
router.use(require('./categoryRoutes'));
router.use(require('./brandRoutes'));
router.use(require('./userRoutes'));

module.exports = router;
