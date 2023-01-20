/**
 *partialUpdateReviews.js
 */

const  reviewsEntity = require('../../entities/reviews');
const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Reviews. {status, message, data}
 */
const partialUpdateReviews = ({ reviewsDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedReviews = await reviewsDb.update(query,dataToUpdate);
  if (!updatedReviews || updatedReviews.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedReviews[0] });
};
module.exports = partialUpdateReviews;