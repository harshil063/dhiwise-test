/**
 *updateTags.js
 */

const  tagsEntity = require('../../entities/tags');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Tags. {status, message, data}
 */
const updateTags = ({
  tagsDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let updatedTags = tagsEntity(dataToUpdate);
  updatedTags = await tagsDb.update(query,updatedTags);
  if (!updatedTags || updatedTags.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedTags[0] });
};
module.exports = updateTags;