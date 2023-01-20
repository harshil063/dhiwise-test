/**
 *softDeleteReviews.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Reviews. {status, message, data}
 */
const softDeleteReviews = ({ reviewsDb }) => async (params,req,res) => {
  let {
    query, dataToUpdate 
  } = params;
  let updatedReviews = await reviewsDb.update(query, dataToUpdate);
  if (!updatedReviews || updatedReviews.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedReviews[0] });
};
module.exports = softDeleteReviews;
