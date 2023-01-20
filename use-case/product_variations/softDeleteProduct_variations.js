/**
 *softDeleteProduct_variations.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Product_variations. {status, message, data}
 */
const softDeleteProduct_variations = ({ product_variationsDb }) => async (params,req,res) => {
  let {
    query, dataToUpdate 
  } = params;
  let updatedProduct_variations = await product_variationsDb.update(query, dataToUpdate);
  if (!updatedProduct_variations || updatedProduct_variations.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedProduct_variations[0] });
};
module.exports = softDeleteProduct_variations;
