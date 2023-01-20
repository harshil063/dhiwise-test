/**
 *partialUpdateTags.js
 */

const  tagsEntity = require('../../entities/tags');
const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Tags. {status, message, data}
 */
const partialUpdateTags = ({ tagsDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedTags = await tagsDb.update(query,dataToUpdate);
  if (!updatedTags || updatedTags.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedTags[0] });
};
module.exports = partialUpdateTags;