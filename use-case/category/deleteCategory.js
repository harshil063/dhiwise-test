
/**
 *deleteCategory.js
 */

const response = require('../../utils/response');
    
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Category. {status, message, data}
 */
const deleteCategory = ({ categoryDb }) => async (params, req, res) => {
  let { query } = params;
  let deletedCategory = await categoryDb.destroy(query);
  if (!deletedCategory || deletedCategory.length == 0){
    return response.recordNotFound({ });
  }
  return response.success({ data: deletedCategory[0] });
};

module.exports = deleteCategory;
