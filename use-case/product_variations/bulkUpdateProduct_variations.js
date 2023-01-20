/**
 *bulkUpdateProduct_variations.js
 */

const response = require('../../utils/response');

/**
 * @description : update multiple records of product_variations with data by filter.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of bulkUpdate. {status, message, data}
 */
const bulkUpdateProduct_variations = ({ product_variationsDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedProduct_variations = (await product_variationsDb.update(query,dataToUpdate)).length;
  return response.success({ data:{ count: updatedProduct_variations } });
};
module.exports = bulkUpdateProduct_variations;