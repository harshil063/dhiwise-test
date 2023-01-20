/**
 *getProduct_variations.js
 */
 
const response = require('../../utils/response');

/**
 * @description : find record from database by id;
 * @param {Object} params : request body including option and query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : found Product_variations. {status, message, data}
 */
const getProduct_variations = ({
  product_variationsDb, filterValidation 
}) => async (params,req,res) => {
  let {
    query, options  
  } = params;
  const validateRequest = await filterValidation(options);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let foundProduct_variations = await product_variationsDb.findOne(query, options);
  if (!foundProduct_variations){
    return response.recordNotFound();
  }
  return response.success({ data:foundProduct_variations });
};
module.exports = getProduct_variations;