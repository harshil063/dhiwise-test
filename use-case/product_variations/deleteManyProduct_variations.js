/**
 *deleteManyProduct_variations.js
 */

const response = require('../../utils/response');

/**
 * @description : delete documents from table by using ids.
 * @param {Object} params : request body including query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : no of documents deleted. {status, message, data}
 */
const deleteManyProduct_variations = ({ product_variationsDb }) => async (params, req, res) => {
  let deletedProduct_variations = (await product_variationsDb.destroy(params)).length;
  return response.success({ data: { count:deletedProduct_variations } });
};
module.exports = deleteManyProduct_variations;
