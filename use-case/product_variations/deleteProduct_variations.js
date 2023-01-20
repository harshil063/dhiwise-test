
/**
 *deleteProduct_variations.js
 */

const response = require('../../utils/response');
    
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Product_variations. {status, message, data}
 */
const deleteProduct_variations = ({ product_variationsDb }) => async (params, req, res) => {
  let { query } = params;
  let deletedProduct_variations = await product_variationsDb.destroy(query);
  if (!deletedProduct_variations || deletedProduct_variations.length == 0){
    return response.recordNotFound({ });
  }
  return response.success({ data: deletedProduct_variations[0] });
};

module.exports = deleteProduct_variations;
