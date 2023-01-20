
/**
 *deleteTags.js
 */

const response = require('../../utils/response');
    
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Tags. {status, message, data}
 */
const deleteTags = ({ tagsDb }) => async (params, req, res) => {
  let { query } = params;
  let deletedTags = await tagsDb.destroy(query);
  if (!deletedTags || deletedTags.length == 0){
    return response.recordNotFound({ });
  }
  return response.success({ data: deletedTags[0] });
};

module.exports = deleteTags;
