const product_variationsDb = require('../../../data-access/product_variationsDb');
const product_variationsSchema = require('../../../validation/schema/product_variations');
const createValidation = require('../../../validation')(product_variationsSchema.createSchema);
const updateValidation = require('../../../validation')(product_variationsSchema.updateSchema);
const filterValidation = require('../../../validation')(product_variationsSchema.filterValidationSchema);
const product_variationsController = require('./product_variations');

// use-cases imports with dependency injection
const addProduct_variationsUsecase = require('../../../use-case/product_variations/addProduct_variations')({
  product_variationsDb,
  createValidation 
});
const findAllProduct_variationsUsecase = require('../../../use-case/product_variations/findAllProduct_variations')({
  product_variationsDb,
  filterValidation
});
const getProduct_variationsCountUsecase = require('../../../use-case/product_variations/getProduct_variationsCount')({
  product_variationsDb,
  filterValidation
});
const getProduct_variationsUsecase = require('../../../use-case/product_variations/getProduct_variations')({
  product_variationsDb,
  filterValidation
});
const updateProduct_variationsUsecase = require('../../../use-case/product_variations/updateProduct_variations')({
  product_variationsDb,
  updateValidation 
});
const partialUpdateProduct_variationsUsecase = require('../../../use-case/product_variations/partialUpdateProduct_variations')({
  product_variationsDb,
  updateValidation
});
const softDeleteProduct_variationsUsecase = require('../../../use-case/product_variations/softDeleteProduct_variations')({ product_variationsDb });
const softDeleteManyProduct_variationsUsecase = require('../../../use-case/product_variations/softDeleteManyProduct_variations')({ product_variationsDb });
const bulkInsertProduct_variationsUsecase = require('../../../use-case/product_variations/bulkInsertProduct_variations')({ product_variationsDb });
const bulkUpdateProduct_variationsUsecase = require('../../../use-case/product_variations/bulkUpdateProduct_variations')({ product_variationsDb });
const deleteProduct_variationsUsecase = require('../../../use-case/product_variations/deleteProduct_variations')({ product_variationsDb });
const deleteManyProduct_variationsUsecase = require('../../../use-case/product_variations/deleteManyProduct_variations')({ product_variationsDb });

// controller methods mapping
const addProduct_variations = product_variationsController.addProduct_variations(addProduct_variationsUsecase);
const findAllProduct_variations = product_variationsController.findAllProduct_variations(findAllProduct_variationsUsecase);
const getProduct_variationsCount = product_variationsController.getProduct_variationsCount(getProduct_variationsCountUsecase);
const getProduct_variationsById = product_variationsController.getProduct_variations(getProduct_variationsUsecase);
const updateProduct_variations = product_variationsController.updateProduct_variations(updateProduct_variationsUsecase);
const partialUpdateProduct_variations = product_variationsController.partialUpdateProduct_variations(partialUpdateProduct_variationsUsecase);
const softDeleteProduct_variations = product_variationsController.softDeleteProduct_variations(softDeleteProduct_variationsUsecase);
const softDeleteManyProduct_variations = product_variationsController.softDeleteManyProduct_variations(softDeleteManyProduct_variationsUsecase);
const bulkInsertProduct_variations = product_variationsController.bulkInsertProduct_variations(bulkInsertProduct_variationsUsecase);
const bulkUpdateProduct_variations = product_variationsController.bulkUpdateProduct_variations(bulkUpdateProduct_variationsUsecase);
const deleteProduct_variations = product_variationsController.deleteProduct_variations(deleteProduct_variationsUsecase);
const deleteManyProduct_variations = product_variationsController.deleteManyProduct_variations(deleteManyProduct_variationsUsecase);

module.exports = {
  addProduct_variations,
  findAllProduct_variations,
  getProduct_variationsCount,
  getProduct_variationsById,
  updateProduct_variations,
  partialUpdateProduct_variations,
  softDeleteProduct_variations,
  softDeleteManyProduct_variations,
  bulkInsertProduct_variations,
  bulkUpdateProduct_variations,
  deleteProduct_variations,
  deleteManyProduct_variations,
};