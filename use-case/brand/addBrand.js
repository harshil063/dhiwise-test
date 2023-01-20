
/**
 *addBrand.js
 */

const  brandEntity = require('../../entities/brand');
const response = require('../../utils/response');

/**
 * @description : create new record of brand in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addBrand = ({
  brandDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let createdBrand  = brandEntity(dataToCreate);
  createdBrand = await brandDb.createOne(createdBrand );
  return response.success({ data:createdBrand });
};
module.exports = addBrand;