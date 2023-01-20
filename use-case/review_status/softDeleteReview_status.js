/**
 *softDeleteReview_status.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Review_status. {status, message, data}
 */
const softDeleteReview_status = ({ review_statusDb }) => async (params,req,res) => {
  let {
    query, dataToUpdate 
  } = params;
  let updatedReview_status = await review_statusDb.update(query, dataToUpdate);
  if (!updatedReview_status || updatedReview_status.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedReview_status[0] });
};
module.exports = softDeleteReview_status;
