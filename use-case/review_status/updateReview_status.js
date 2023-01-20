/**
 *updateReview_status.js
 */

const  review_statusEntity = require('../../entities/review_status');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Review_status. {status, message, data}
 */
const updateReview_status = ({
  review_statusDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let updatedReview_status = review_statusEntity(dataToUpdate);
  updatedReview_status = await review_statusDb.update(query,updatedReview_status);
  if (!updatedReview_status || updatedReview_status.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedReview_status[0] });
};
module.exports = updateReview_status;