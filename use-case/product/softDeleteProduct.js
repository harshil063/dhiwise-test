/**
 *softDeleteProduct.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Product. {status, message, data}
 */
const softDeleteProduct = ({ productDb }) => async (params,req,res) => {
  let {
    query, dataToUpdate 
  } = params;
  let updatedProduct = await productDb.update(query, dataToUpdate);
  if (!updatedProduct || updatedProduct.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedProduct[0] });
};
module.exports = softDeleteProduct;
