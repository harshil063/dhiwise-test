
/**
 *bulkInsertReviews.js
 */

const  reviewsEntity = require('../../entities/reviews');
const response = require('../../utils/response');

/**
 * @description : create multiple records in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Reviewss. {status, message, data}
 */
const bulkInsertReviews = ({
  reviewsDb,createValidation 
}) => async (dataToCreate,req,res) => {
  let reviewsEntities = dataToCreate.map(item => reviewsEntity(item));
  let createdReviews = await reviewsDb.createMany(reviewsEntities);
  return response.success({ data:{ count: createdReviews.length } });
};
module.exports = bulkInsertReviews;