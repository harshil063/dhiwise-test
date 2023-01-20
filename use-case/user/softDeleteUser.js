/**
 *softDeleteUser.js
 */

const makeGetDependencyCount = require('./deleteDependent').getDependencyCount;
const makeSoftDeleteWithDependency = require('./deleteDependent').softDeleteWithDependency;
const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated User. {status, message, data}
 */
const softDeleteUser = ({
  userDb,tagsDb,review_statusDb,reviewsDb,product_variationsDb,productDb,categoryDb,brandDb,userAuthSettingsDb,userTokensDb,userRoleDb
}) => async (params,req,res) => {
  let {
    isWarning, query, dataToUpdate 
  } = params;
  if (isWarning) {
    const getDependencyCount = makeGetDependencyCount({
      userDb,
      tagsDb,
      review_statusDb,
      reviewsDb,
      product_variationsDb,
      productDb,
      categoryDb,
      brandDb,
      userAuthSettingsDb,
      userTokensDb,
      userRoleDb
    });
    return await getDependencyCount(query); 
  } else {
    const softDeleteWithDependency = makeSoftDeleteWithDependency({
      userDb,
      tagsDb,
      review_statusDb,
      reviewsDb,
      product_variationsDb,
      productDb,
      categoryDb,
      brandDb,
      userAuthSettingsDb,
      userTokensDb,
      userRoleDb
    });
    return await softDeleteWithDependency(query, dataToUpdate);
  }
};
module.exports = softDeleteUser;
