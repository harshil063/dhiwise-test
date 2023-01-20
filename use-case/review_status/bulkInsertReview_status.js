
/**
 *bulkInsertReview_status.js
 */

const  review_statusEntity = require('../../entities/review_status');
const response = require('../../utils/response');

/**
 * @description : create multiple records in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Review_statuss. {status, message, data}
 */
const bulkInsertReview_status = ({
  review_statusDb,createValidation 
}) => async (dataToCreate,req,res) => {
  let review_statusEntities = dataToCreate.map(item => review_statusEntity(item));
  let createdReview_status = await review_statusDb.createMany(review_statusEntities);
  return response.success({ data:{ count: createdReview_status.length } });
};
module.exports = bulkInsertReview_status;