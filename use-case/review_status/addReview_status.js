
/**
 *addReview_status.js
 */

const  review_statusEntity = require('../../entities/review_status');
const response = require('../../utils/response');

/**
 * @description : create new record of review_status in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addReview_status = ({
  review_statusDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let createdReview_status  = review_statusEntity(dataToCreate);
  createdReview_status = await review_statusDb.createOne(createdReview_status );
  return response.success({ data:createdReview_status });
};
module.exports = addReview_status;