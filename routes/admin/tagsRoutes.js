const express = require('express');
const router = express.Router();
const tagsController = require('../../controller/admin/tags');
const {
  auth,checkRolePermission,
} = require('../../middleware');
const { PLATFORM } =  require('../../constants/authConstant');
router.route('/admin/tags/create').post(auth(PLATFORM.ADMIN),checkRolePermission,tagsController.addTags);
router.route('/admin/tags/list').post(auth(PLATFORM.ADMIN),checkRolePermission,tagsController.findAllTags);

router.route('/admin/tags/count').post(auth(PLATFORM.ADMIN),checkRolePermission,tagsController.getTagsCount);
router.route('/admin/tags/:id').get(auth(PLATFORM.ADMIN),checkRolePermission,tagsController.getTagsById);

router.route('/admin/tags/update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,tagsController.updateTags);   
router.route('/admin/tags/partial-update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,tagsController.partialUpdateTags);   

router.route('/admin/tags/softDelete/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,tagsController.softDeleteTags);
router.route('/admin/tags/softDeleteMany').put(auth(PLATFORM.ADMIN),checkRolePermission,tagsController.softDeleteManyTags);
router.route('/admin/tags/addBulk').post(auth(PLATFORM.ADMIN),checkRolePermission,tagsController.bulkInsertTags);

router.route('/admin/tags/updateBulk').put(auth(PLATFORM.ADMIN),checkRolePermission,tagsController.bulkUpdateTags); 
router.route('/admin/tags/delete/:id').delete(auth(PLATFORM.ADMIN),checkRolePermission,tagsController.deleteTags);
router.route('/admin/tags/deleteMany').post(auth(PLATFORM.ADMIN),checkRolePermission,tagsController.deleteManyTags);

module.exports = router;
