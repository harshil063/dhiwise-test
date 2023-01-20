const express = require('express');
const router = express.Router();
const tagsController = require('../../../controller/device/v1/tags');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant');
router.route('/device/api/v1/tags/create').post(auth(PLATFORM.DEVICE),checkRolePermission,tagsController.addTags);
router.route('/device/api/v1/tags/list').post(auth(PLATFORM.DEVICE),checkRolePermission,tagsController.findAllTags);

router.route('/device/api/v1/tags/count').post(auth(PLATFORM.DEVICE),checkRolePermission,tagsController.getTagsCount);
router.route('/device/api/v1/tags/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,tagsController.getTagsById);

router.route('/device/api/v1/tags/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,tagsController.updateTags);   
router.route('/device/api/v1/tags/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,tagsController.partialUpdateTags);   

router.route('/device/api/v1/tags/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,tagsController.softDeleteTags);
router.route('/device/api/v1/tags/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,tagsController.softDeleteManyTags);
router.route('/device/api/v1/tags/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,tagsController.bulkInsertTags);

router.route('/device/api/v1/tags/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,tagsController.bulkUpdateTags); 
router.route('/device/api/v1/tags/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,tagsController.deleteTags);
router.route('/device/api/v1/tags/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,tagsController.deleteManyTags);

module.exports = router;
