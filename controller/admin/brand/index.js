const brandDb = require('../../../data-access/brandDb');
const brandSchema = require('../../../validation/schema/brand');
const createValidation = require('../../../validation')(brandSchema.createSchema);
const updateValidation = require('../../../validation')(brandSchema.updateSchema);
const filterValidation = require('../../../validation')(brandSchema.filterValidationSchema);
const brandController = require('./brand');

// use-cases imports with dependency injection
const addBrandUsecase = require('../../../use-case/brand/addBrand')({
  brandDb,
  createValidation 
});
const findAllBrandUsecase = require('../../../use-case/brand/findAllBrand')({
  brandDb,
  filterValidation
});
const getBrandCountUsecase = require('../../../use-case/brand/getBrandCount')({
  brandDb,
  filterValidation
});
const getBrandUsecase = require('../../../use-case/brand/getBrand')({
  brandDb,
  filterValidation
});
const updateBrandUsecase = require('../../../use-case/brand/updateBrand')({
  brandDb,
  updateValidation 
});
const partialUpdateBrandUsecase = require('../../../use-case/brand/partialUpdateBrand')({
  brandDb,
  updateValidation
});
const softDeleteBrandUsecase = require('../../../use-case/brand/softDeleteBrand')({ brandDb });
const softDeleteManyBrandUsecase = require('../../../use-case/brand/softDeleteManyBrand')({ brandDb });
const bulkInsertBrandUsecase = require('../../../use-case/brand/bulkInsertBrand')({ brandDb });
const bulkUpdateBrandUsecase = require('../../../use-case/brand/bulkUpdateBrand')({ brandDb });
const deleteBrandUsecase = require('../../../use-case/brand/deleteBrand')({ brandDb });
const deleteManyBrandUsecase = require('../../../use-case/brand/deleteManyBrand')({ brandDb });

// controller methods mapping
const addBrand = brandController.addBrand(addBrandUsecase);
const findAllBrand = brandController.findAllBrand(findAllBrandUsecase);
const getBrandCount = brandController.getBrandCount(getBrandCountUsecase);
const getBrandById = brandController.getBrand(getBrandUsecase);
const updateBrand = brandController.updateBrand(updateBrandUsecase);
const partialUpdateBrand = brandController.partialUpdateBrand(partialUpdateBrandUsecase);
const softDeleteBrand = brandController.softDeleteBrand(softDeleteBrandUsecase);
const softDeleteManyBrand = brandController.softDeleteManyBrand(softDeleteManyBrandUsecase);
const bulkInsertBrand = brandController.bulkInsertBrand(bulkInsertBrandUsecase);
const bulkUpdateBrand = brandController.bulkUpdateBrand(bulkUpdateBrandUsecase);
const deleteBrand = brandController.deleteBrand(deleteBrandUsecase);
const deleteManyBrand = brandController.deleteManyBrand(deleteManyBrandUsecase);

module.exports = {
  addBrand,
  findAllBrand,
  getBrandCount,
  getBrandById,
  updateBrand,
  partialUpdateBrand,
  softDeleteBrand,
  softDeleteManyBrand,
  bulkInsertBrand,
  bulkUpdateBrand,
  deleteBrand,
  deleteManyBrand,
};