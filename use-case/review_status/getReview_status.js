/**
 *getReview_status.js
 */
 
const response = require('../../utils/response');

/**
 * @description : find record from database by id;
 * @param {Object} params : request body including option and query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : found Review_status. {status, message, data}
 */
const getReview_status = ({
  review_statusDb, filterValidation 
}) => async (params,req,res) => {
  let {
    query, options  
  } = params;
  const validateRequest = await filterValidation(options);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let foundReview_status = await review_statusDb.findOne(query, options);
  if (!foundReview_status){
    return response.recordNotFound();
  }
  return response.success({ data:foundReview_status });
};
module.exports = getReview_status;