
/**
 *bulkInsertProduct_variations.js
 */

const  product_variationsEntity = require('../../entities/product_variations');
const response = require('../../utils/response');

/**
 * @description : create multiple records in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Product_variationss. {status, message, data}
 */
const bulkInsertProduct_variations = ({
  product_variationsDb,createValidation 
}) => async (dataToCreate,req,res) => {
  let product_variationsEntities = dataToCreate.map(item => product_variationsEntity(item));
  let createdProduct_variations = await product_variationsDb.createMany(product_variationsEntities);
  return response.success({ data:{ count: createdProduct_variations.length } });
};
module.exports = bulkInsertProduct_variations;