/**
 *partialUpdateProduct_variations.js
 */

const  product_variationsEntity = require('../../entities/product_variations');
const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Product_variations. {status, message, data}
 */
const partialUpdateProduct_variations = ({ product_variationsDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedProduct_variations = await product_variationsDb.update(query,dataToUpdate);
  if (!updatedProduct_variations || updatedProduct_variations.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedProduct_variations[0] });
};
module.exports = partialUpdateProduct_variations;