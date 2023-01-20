
/**
 *bulkInsertTags.js
 */

const  tagsEntity = require('../../entities/tags');
const response = require('../../utils/response');

/**
 * @description : create multiple records in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Tagss. {status, message, data}
 */
const bulkInsertTags = ({
  tagsDb,createValidation 
}) => async (dataToCreate,req,res) => {
  let tagsEntities = dataToCreate.map(item => tagsEntity(item));
  let createdTags = await tagsDb.createMany(tagsEntities);
  return response.success({ data:{ count: createdTags.length } });
};
module.exports = bulkInsertTags;