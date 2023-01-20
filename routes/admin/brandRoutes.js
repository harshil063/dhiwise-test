const express = require('express');
const router = express.Router();
const brandController = require('../../controller/admin/brand');
const {
  auth,checkRolePermission,
} = require('../../middleware');
const { PLATFORM } =  require('../../constants/authConstant');
router.route('/admin/brand/create').post(auth(PLATFORM.ADMIN),checkRolePermission,brandController.addBrand);
router.route('/admin/brand/list').post(auth(PLATFORM.ADMIN),checkRolePermission,brandController.findAllBrand);

router.route('/admin/brand/count').post(auth(PLATFORM.ADMIN),checkRolePermission,brandController.getBrandCount);
router.route('/admin/brand/:id').get(auth(PLATFORM.ADMIN),checkRolePermission,brandController.getBrandById);

router.route('/admin/brand/update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,brandController.updateBrand);   
router.route('/admin/brand/partial-update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,brandController.partialUpdateBrand);   

router.route('/admin/brand/softDelete/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,brandController.softDeleteBrand);
router.route('/admin/brand/softDeleteMany').put(auth(PLATFORM.ADMIN),checkRolePermission,brandController.softDeleteManyBrand);
router.route('/admin/brand/addBulk').post(auth(PLATFORM.ADMIN),checkRolePermission,brandController.bulkInsertBrand);

router.route('/admin/brand/updateBulk').put(auth(PLATFORM.ADMIN),checkRolePermission,brandController.bulkUpdateBrand); 
router.route('/admin/brand/delete/:id').delete(auth(PLATFORM.ADMIN),checkRolePermission,brandController.deleteBrand);
router.route('/admin/brand/deleteMany').post(auth(PLATFORM.ADMIN),checkRolePermission,brandController.deleteManyBrand);

module.exports = router;
