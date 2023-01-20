/**
 *partialUpdateBrand.js
 */

const  brandEntity = require('../../entities/brand');
const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Brand. {status, message, data}
 */
const partialUpdateBrand = ({ brandDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedBrand = await brandDb.update(query,dataToUpdate);
  if (!updatedBrand || updatedBrand.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedBrand[0] });
};
module.exports = partialUpdateBrand;