
/**
 *deleteProduct.js
 */

const response = require('../../utils/response');
    
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Product. {status, message, data}
 */
const deleteProduct = ({ productDb }) => async (params, req, res) => {
  let { query } = params;
  let deletedProduct = await productDb.destroy(query);
  if (!deletedProduct || deletedProduct.length == 0){
    return response.recordNotFound({ });
  }
  return response.success({ data: deletedProduct[0] });
};

module.exports = deleteProduct;
