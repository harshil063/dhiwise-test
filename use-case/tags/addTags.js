
/**
 *addTags.js
 */

const  tagsEntity = require('../../entities/tags');
const response = require('../../utils/response');

/**
 * @description : create new record of tags in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addTags = ({
  tagsDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let createdTags  = tagsEntity(dataToCreate);
  createdTags = await tagsDb.createOne(createdTags );
  return response.success({ data:createdTags });
};
module.exports = addTags;