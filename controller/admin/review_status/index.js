const review_statusDb = require('../../../data-access/review_statusDb');
const review_statusSchema = require('../../../validation/schema/review_status');
const createValidation = require('../../../validation')(review_statusSchema.createSchema);
const updateValidation = require('../../../validation')(review_statusSchema.updateSchema);
const filterValidation = require('../../../validation')(review_statusSchema.filterValidationSchema);
const review_statusController = require('./review_status');

// use-cases imports with dependency injection
const addReview_statusUsecase = require('../../../use-case/review_status/addReview_status')({
  review_statusDb,
  createValidation 
});
const findAllReview_statusUsecase = require('../../../use-case/review_status/findAllReview_status')({
  review_statusDb,
  filterValidation
});
const getReview_statusCountUsecase = require('../../../use-case/review_status/getReview_statusCount')({
  review_statusDb,
  filterValidation
});
const getReview_statusUsecase = require('../../../use-case/review_status/getReview_status')({
  review_statusDb,
  filterValidation
});
const updateReview_statusUsecase = require('../../../use-case/review_status/updateReview_status')({
  review_statusDb,
  updateValidation 
});
const partialUpdateReview_statusUsecase = require('../../../use-case/review_status/partialUpdateReview_status')({
  review_statusDb,
  updateValidation
});
const softDeleteReview_statusUsecase = require('../../../use-case/review_status/softDeleteReview_status')({ review_statusDb });
const softDeleteManyReview_statusUsecase = require('../../../use-case/review_status/softDeleteManyReview_status')({ review_statusDb });
const bulkInsertReview_statusUsecase = require('../../../use-case/review_status/bulkInsertReview_status')({ review_statusDb });
const bulkUpdateReview_statusUsecase = require('../../../use-case/review_status/bulkUpdateReview_status')({ review_statusDb });
const deleteReview_statusUsecase = require('../../../use-case/review_status/deleteReview_status')({ review_statusDb });
const deleteManyReview_statusUsecase = require('../../../use-case/review_status/deleteManyReview_status')({ review_statusDb });

// controller methods mapping
const addReview_status = review_statusController.addReview_status(addReview_statusUsecase);
const findAllReview_status = review_statusController.findAllReview_status(findAllReview_statusUsecase);
const getReview_statusCount = review_statusController.getReview_statusCount(getReview_statusCountUsecase);
const getReview_statusById = review_statusController.getReview_status(getReview_statusUsecase);
const updateReview_status = review_statusController.updateReview_status(updateReview_statusUsecase);
const partialUpdateReview_status = review_statusController.partialUpdateReview_status(partialUpdateReview_statusUsecase);
const softDeleteReview_status = review_statusController.softDeleteReview_status(softDeleteReview_statusUsecase);
const softDeleteManyReview_status = review_statusController.softDeleteManyReview_status(softDeleteManyReview_statusUsecase);
const bulkInsertReview_status = review_statusController.bulkInsertReview_status(bulkInsertReview_statusUsecase);
const bulkUpdateReview_status = review_statusController.bulkUpdateReview_status(bulkUpdateReview_statusUsecase);
const deleteReview_status = review_statusController.deleteReview_status(deleteReview_statusUsecase);
const deleteManyReview_status = review_statusController.deleteManyReview_status(deleteManyReview_statusUsecase);

module.exports = {
  addReview_status,
  findAllReview_status,
  getReview_statusCount,
  getReview_statusById,
  updateReview_status,
  partialUpdateReview_status,
  softDeleteReview_status,
  softDeleteManyReview_status,
  bulkInsertReview_status,
  bulkUpdateReview_status,
  deleteReview_status,
  deleteManyReview_status,
};