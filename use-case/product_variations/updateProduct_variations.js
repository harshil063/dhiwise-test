/**
 *updateProduct_variations.js
 */

const  product_variationsEntity = require('../../entities/product_variations');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Product_variations. {status, message, data}
 */
const updateProduct_variations = ({
  product_variationsDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let updatedProduct_variations = product_variationsEntity(dataToUpdate);
  updatedProduct_variations = await product_variationsDb.update(query,updatedProduct_variations);
  if (!updatedProduct_variations || updatedProduct_variations.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedProduct_variations[0] });
};
module.exports = updateProduct_variations;