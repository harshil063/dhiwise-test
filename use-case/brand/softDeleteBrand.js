/**
 *softDeleteBrand.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Brand. {status, message, data}
 */
const softDeleteBrand = ({ brandDb }) => async (params,req,res) => {
  let {
    query, dataToUpdate 
  } = params;
  let updatedBrand = await brandDb.update(query, dataToUpdate);
  if (!updatedBrand || updatedBrand.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedBrand[0] });
};
module.exports = softDeleteBrand;
