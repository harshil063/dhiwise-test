/**
 *getBrand.js
 */
 
const response = require('../../utils/response');

/**
 * @description : find record from database by id;
 * @param {Object} params : request body including option and query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : found Brand. {status, message, data}
 */
const getBrand = ({
  brandDb, filterValidation 
}) => async (params,req,res) => {
  let {
    query, options  
  } = params;
  const validateRequest = await filterValidation(options);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let foundBrand = await brandDb.findOne(query, options);
  if (!foundBrand){
    return response.recordNotFound();
  }
  return response.success({ data:foundBrand });
};
module.exports = getBrand;