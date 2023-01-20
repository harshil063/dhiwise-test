const express = require('express');
const router = express.Router();
const review_statusController = require('../../controller/admin/review_status');
const {
  auth,checkRolePermission,
} = require('../../middleware');
const { PLATFORM } =  require('../../constants/authConstant');
router.route('/admin/review_status/create').post(auth(PLATFORM.ADMIN),checkRolePermission,review_statusController.addReview_status);
router.route('/admin/review_status/list').post(auth(PLATFORM.ADMIN),checkRolePermission,review_statusController.findAllReview_status);

router.route('/admin/review_status/count').post(auth(PLATFORM.ADMIN),checkRolePermission,review_statusController.getReview_statusCount);
router.route('/admin/review_status/:id').get(auth(PLATFORM.ADMIN),checkRolePermission,review_statusController.getReview_statusById);

router.route('/admin/review_status/update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,review_statusController.updateReview_status);   
router.route('/admin/review_status/partial-update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,review_statusController.partialUpdateReview_status);   

router.route('/admin/review_status/softDelete/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,review_statusController.softDeleteReview_status);
router.route('/admin/review_status/softDeleteMany').put(auth(PLATFORM.ADMIN),checkRolePermission,review_statusController.softDeleteManyReview_status);
router.route('/admin/review_status/addBulk').post(auth(PLATFORM.ADMIN),checkRolePermission,review_statusController.bulkInsertReview_status);

router.route('/admin/review_status/updateBulk').put(auth(PLATFORM.ADMIN),checkRolePermission,review_statusController.bulkUpdateReview_status); 
router.route('/admin/review_status/delete/:id').delete(auth(PLATFORM.ADMIN),checkRolePermission,review_statusController.deleteReview_status);
router.route('/admin/review_status/deleteMany').post(auth(PLATFORM.ADMIN),checkRolePermission,review_statusController.deleteManyReview_status);

module.exports = router;
