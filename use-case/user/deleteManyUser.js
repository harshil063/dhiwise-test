/**
 *deleteManyUser.js
 */

const makeGetDependencyCount = require('./deleteDependent').getDependencyCount;
const makeDeleteWithDependency = require('./deleteDependent').deleteWithDependency;
const response = require('../../utils/response');

/**
 * @description : delete documents from table by using ids.
 * @param {Object} params : request body including query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : no of documents deleted. {status, message, data}
 */
const deleteManyUser = ({
  userDb,tagsDb,review_statusDb,reviewsDb,product_variationsDb,productDb,categoryDb,brandDb,userAuthSettingsDb,userTokensDb,userRoleDb
}) => async (params,req,res) => {
  let {
    query,isWarning 
  } = params;
  if (isWarning){
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
    const deleteWithDependency = makeDeleteWithDependency({
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
    return await deleteWithDependency(query);
  }
};
module.exports = deleteManyUser;
