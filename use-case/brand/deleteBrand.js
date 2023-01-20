
/**
 *deleteBrand.js
 */

const response = require('../../utils/response');
    
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Brand. {status, message, data}
 */
const deleteBrand = ({ brandDb }) => async (params, req, res) => {
  let { query } = params;
  let deletedBrand = await brandDb.destroy(query);
  if (!deletedBrand || deletedBrand.length == 0){
    return response.recordNotFound({ });
  }
  return response.success({ data: deletedBrand[0] });
};

module.exports = deleteBrand;
