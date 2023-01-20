/**
 *bulkUpdateBrand.js
 */

const response = require('../../utils/response');

/**
 * @description : update multiple records of brand with data by filter.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of bulkUpdate. {status, message, data}
 */
const bulkUpdateBrand = ({ brandDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedBrand = (await brandDb.update(query,dataToUpdate)).length;
  return response.success({ data:{ count: updatedBrand } });
};
module.exports = bulkUpdateBrand;