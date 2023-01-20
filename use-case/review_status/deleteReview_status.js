
/**
 *deleteReview_status.js
 */

const response = require('../../utils/response');
    
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Review_status. {status, message, data}
 */
const deleteReview_status = ({ review_statusDb }) => async (params, req, res) => {
  let { query } = params;
  let deletedReview_status = await review_statusDb.destroy(query);
  if (!deletedReview_status || deletedReview_status.length == 0){
    return response.recordNotFound({ });
  }
  return response.success({ data: deletedReview_status[0] });
};

module.exports = deleteReview_status;
