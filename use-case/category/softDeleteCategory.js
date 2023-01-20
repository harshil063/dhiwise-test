/**
 *softDeleteCategory.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Category. {status, message, data}
 */
const softDeleteCategory = ({ categoryDb }) => async (params,req,res) => {
  let {
    query, dataToUpdate 
  } = params;
  let updatedCategory = await categoryDb.update(query, dataToUpdate);
  if (!updatedCategory || updatedCategory.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedCategory[0] });
};
module.exports = softDeleteCategory;
