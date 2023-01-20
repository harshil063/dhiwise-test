const express = require('express');
const router = express.Router();
const product_variationsController = require('../../controller/admin/product_variations');
const {
  auth,checkRolePermission,
} = require('../../middleware');
const { PLATFORM } =  require('../../constants/authConstant');
router.route('/admin/product_variations/create').post(auth(PLATFORM.ADMIN),checkRolePermission,product_variationsController.addProduct_variations);
router.route('/admin/product_variations/list').post(auth(PLATFORM.ADMIN),checkRolePermission,product_variationsController.findAllProduct_variations);

router.route('/admin/product_variations/count').post(auth(PLATFORM.ADMIN),checkRolePermission,product_variationsController.getProduct_variationsCount);
router.route('/admin/product_variations/:id').get(auth(PLATFORM.ADMIN),checkRolePermission,product_variationsController.getProduct_variationsById);

router.route('/admin/product_variations/update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,product_variationsController.updateProduct_variations);   
router.route('/admin/product_variations/partial-update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,product_variationsController.partialUpdateProduct_variations);   

router.route('/admin/product_variations/softDelete/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,product_variationsController.softDeleteProduct_variations);
router.route('/admin/product_variations/softDeleteMany').put(auth(PLATFORM.ADMIN),checkRolePermission,product_variationsController.softDeleteManyProduct_variations);
router.route('/admin/product_variations/addBulk').post(auth(PLATFORM.ADMIN),checkRolePermission,product_variationsController.bulkInsertProduct_variations);

router.route('/admin/product_variations/updateBulk').put(auth(PLATFORM.ADMIN),checkRolePermission,product_variationsController.bulkUpdateProduct_variations); 
router.route('/admin/product_variations/delete/:id').delete(auth(PLATFORM.ADMIN),checkRolePermission,product_variationsController.deleteProduct_variations);
router.route('/admin/product_variations/deleteMany').post(auth(PLATFORM.ADMIN),checkRolePermission,product_variationsController.deleteManyProduct_variations);

module.exports = router;
