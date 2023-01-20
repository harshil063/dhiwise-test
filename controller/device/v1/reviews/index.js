const reviewsDb = require('../../../../data-access/reviewsDb');
const reviewsSchema = require('../../../../validation/schema/reviews');
const createValidation = require('../../../../validation')(reviewsSchema.createSchema);
const updateValidation = require('../../../../validation')(reviewsSchema.updateSchema);
const filterValidation = require('../../../../validation')(reviewsSchema.filterValidationSchema);
const reviewsController = require('./reviews');

// use-cases imports with dependency injection
const addReviewsUsecase = require('../../../../use-case/reviews/addReviews')({
  reviewsDb,
  createValidation 
});
const findAllReviewsUsecase = require('../../../../use-case/reviews/findAllReviews')({
  reviewsDb,
  filterValidation
});
const getReviewsCountUsecase = require('../../../../use-case/reviews/getReviewsCount')({
  reviewsDb,
  filterValidation
});
const getReviewsUsecase = require('../../../../use-case/reviews/getReviews')({
  reviewsDb,
  filterValidation
});
const updateReviewsUsecase = require('../../../../use-case/reviews/updateReviews')({
  reviewsDb,
  updateValidation 
});
const partialUpdateReviewsUsecase = require('../../../../use-case/reviews/partialUpdateReviews')({
  reviewsDb,
  updateValidation
});
const softDeleteReviewsUsecase = require('../../../../use-case/reviews/softDeleteReviews')({ reviewsDb });
const softDeleteManyReviewsUsecase = require('../../../../use-case/reviews/softDeleteManyReviews')({ reviewsDb });
const bulkInsertReviewsUsecase = require('../../../../use-case/reviews/bulkInsertReviews')({ reviewsDb });
const bulkUpdateReviewsUsecase = require('../../../../use-case/reviews/bulkUpdateReviews')({ reviewsDb });
const deleteReviewsUsecase = require('../../../../use-case/reviews/deleteReviews')({ reviewsDb });
const deleteManyReviewsUsecase = require('../../../../use-case/reviews/deleteManyReviews')({ reviewsDb });

// controller methods mapping
const addReviews = reviewsController.addReviews(addReviewsUsecase);
const findAllReviews = reviewsController.findAllReviews(findAllReviewsUsecase);
const getReviewsCount = reviewsController.getReviewsCount(getReviewsCountUsecase);
const getReviewsById = reviewsController.getReviews(getReviewsUsecase);
const updateReviews = reviewsController.updateReviews(updateReviewsUsecase);
const partialUpdateReviews = reviewsController.partialUpdateReviews(partialUpdateReviewsUsecase);
const softDeleteReviews = reviewsController.softDeleteReviews(softDeleteReviewsUsecase);
const softDeleteManyReviews = reviewsController.softDeleteManyReviews(softDeleteManyReviewsUsecase);
const bulkInsertReviews = reviewsController.bulkInsertReviews(bulkInsertReviewsUsecase);
const bulkUpdateReviews = reviewsController.bulkUpdateReviews(bulkUpdateReviewsUsecase);
const deleteReviews = reviewsController.deleteReviews(deleteReviewsUsecase);
const deleteManyReviews = reviewsController.deleteManyReviews(deleteManyReviewsUsecase);

module.exports = {
  addReviews,
  findAllReviews,
  getReviewsCount,
  getReviewsById,
  updateReviews,
  partialUpdateReviews,
  softDeleteReviews,
  softDeleteManyReviews,
  bulkInsertReviews,
  bulkUpdateReviews,
  deleteReviews,
  deleteManyReviews,
};