/**
 *partialUpdateReview_status.js
 */

const  review_statusEntity = require('../../entities/review_status');
const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Review_status. {status, message, data}
 */
const partialUpdateReview_status = ({ review_statusDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedReview_status = await review_statusDb.update(query,dataToUpdate);
  if (!updatedReview_status || updatedReview_status.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedReview_status[0] });
};
module.exports = partialUpdateReview_status;