const express = require('express');
const router = express.Router();
const product_variationsController = require('../../../controller/device/v1/product_variations');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant');
router.route('/device/api/v1/product_variations/create').post(auth(PLATFORM.DEVICE),checkRolePermission,product_variationsController.addProduct_variations);
router.route('/device/api/v1/product_variations/list').post(auth(PLATFORM.DEVICE),checkRolePermission,product_variationsController.findAllProduct_variations);

router.route('/device/api/v1/product_variations/count').post(auth(PLATFORM.DEVICE),checkRolePermission,product_variationsController.getProduct_variationsCount);
router.route('/device/api/v1/product_variations/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,product_variationsController.getProduct_variationsById);

router.route('/device/api/v1/product_variations/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,product_variationsController.updateProduct_variations);   
router.route('/device/api/v1/product_variations/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,product_variationsController.partialUpdateProduct_variations);   

router.route('/device/api/v1/product_variations/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,product_variationsController.softDeleteProduct_variations);
router.route('/device/api/v1/product_variations/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,product_variationsController.softDeleteManyProduct_variations);
router.route('/device/api/v1/product_variations/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,product_variationsController.bulkInsertProduct_variations);

router.route('/device/api/v1/product_variations/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,product_variationsController.bulkUpdateProduct_variations); 
router.route('/device/api/v1/product_variations/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,product_variationsController.deleteProduct_variations);
router.route('/device/api/v1/product_variations/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,product_variationsController.deleteManyProduct_variations);

module.exports = router;
