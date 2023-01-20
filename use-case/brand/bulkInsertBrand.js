
/**
 *bulkInsertBrand.js
 */

const  brandEntity = require('../../entities/brand');
const response = require('../../utils/response');

/**
 * @description : create multiple records in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Brands. {status, message, data}
 */
const bulkInsertBrand = ({
  brandDb,createValidation 
}) => async (dataToCreate,req,res) => {
  let brandEntities = dataToCreate.map(item => brandEntity(item));
  let createdBrand = await brandDb.createMany(brandEntities);
  return response.success({ data:{ count: createdBrand.length } });
};
module.exports = bulkInsertBrand;