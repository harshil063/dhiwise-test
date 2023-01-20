/**
 *findAllProduct_variations.js
 */

const response = require('../../utils/response');

/**
 * @description : find all records from database based on query and options.
 * @param {Object} params : request body including option and query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : found Product_variations(s). {status, message, data}
 */
const findAllProduct_variations = ({
  product_variationsDb,filterValidation 
}) => async (params,req,res) => {
  let {
    options, query, isCountOnly 
  } = params;
  const validateRequest = await filterValidation(params);
  if (!validateRequest.isValid) {
    return response.validationError({ message: `Invalid values in parameters, ${validateRequest.message}` });
  }
  if (isCountOnly){
    let totalRecords = await product_variationsDb.count(query);
    return response.success({ data: { totalRecords } });  
  }
  else {
    let foundProduct_variations = await product_variationsDb.paginate(query,options);
    if (!foundProduct_variations){
      return response.recordNotFound();
    }
    return response.success({ data:foundProduct_variations });
  }
};
module.exports = findAllProduct_variations;