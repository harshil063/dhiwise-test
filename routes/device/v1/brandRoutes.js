const express = require('express');
const router = express.Router();
const brandController = require('../../../controller/device/v1/brand');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant');
router.route('/device/api/v1/brand/create').post(auth(PLATFORM.DEVICE),checkRolePermission,brandController.addBrand);
router.route('/device/api/v1/brand/list').post(auth(PLATFORM.DEVICE),checkRolePermission,brandController.findAllBrand);

router.route('/device/api/v1/brand/count').post(auth(PLATFORM.DEVICE),checkRolePermission,brandController.getBrandCount);
router.route('/device/api/v1/brand/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,brandController.getBrandById);

router.route('/device/api/v1/brand/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,brandController.updateBrand);   
router.route('/device/api/v1/brand/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,brandController.partialUpdateBrand);   

router.route('/device/api/v1/brand/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,brandController.softDeleteBrand);
router.route('/device/api/v1/brand/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,brandController.softDeleteManyBrand);
router.route('/device/api/v1/brand/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,brandController.bulkInsertBrand);

router.route('/device/api/v1/brand/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,brandController.bulkUpdateBrand); 
router.route('/device/api/v1/brand/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,brandController.deleteBrand);
router.route('/device/api/v1/brand/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,brandController.deleteManyBrand);

module.exports = router;
