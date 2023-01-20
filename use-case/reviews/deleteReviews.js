
/**
 *deleteReviews.js
 */

const response = require('../../utils/response');
    
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Reviews. {status, message, data}
 */
const deleteReviews = ({ reviewsDb }) => async (params, req, res) => {
  let { query } = params;
  let deletedReviews = await reviewsDb.destroy(query);
  if (!deletedReviews || deletedReviews.length == 0){
    return response.recordNotFound({ });
  }
  return response.success({ data: deletedReviews[0] });
};

module.exports = deleteReviews;
