
/**
 *addProduct_variations.js
 */

const  product_variationsEntity = require('../../entities/product_variations');
const response = require('../../utils/response');

/**
 * @description : create new record of product_variations in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addProduct_variations = ({
  product_variationsDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let createdProduct_variations  = product_variationsEntity(dataToCreate);
  createdProduct_variations = await product_variationsDb.createOne(createdProduct_variations );
  return response.success({ data:createdProduct_variations });
};
module.exports = addProduct_variations;