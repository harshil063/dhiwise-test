/**
 *softDeleteTags.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Tags. {status, message, data}
 */
const softDeleteTags = ({ tagsDb }) => async (params,req,res) => {
  let {
    query, dataToUpdate 
  } = params;
  let updatedTags = await tagsDb.update(query, dataToUpdate);
  if (!updatedTags || updatedTags.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedTags[0] });
};
module.exports = softDeleteTags;
