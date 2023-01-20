
/**
 *addReviews.js
 */

const  reviewsEntity = require('../../entities/reviews');
const response = require('../../utils/response');

/**
 * @description : create new record of reviews in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addReviews = ({
  reviewsDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let createdReviews  = reviewsEntity(dataToCreate);
  createdReviews = await reviewsDb.createOne(createdReviews );
  return response.success({ data:createdReviews });
};
module.exports = addReviews;