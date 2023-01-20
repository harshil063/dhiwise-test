/**
 *updateReviews.js
 */

const  reviewsEntity = require('../../entities/reviews');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Reviews. {status, message, data}
 */
const updateReviews = ({
  reviewsDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let updatedReviews = reviewsEntity(dataToUpdate);
  updatedReviews = await reviewsDb.update(query,updatedReviews);
  if (!updatedReviews || updatedReviews.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedReviews[0] });
};
module.exports = updateReviews;