const response = require('../../utils/response');

const getDependencyCount = ({
  userDb,tagsDb,review_statusDb,reviewsDb,product_variationsDb,productDb,categoryDb,brandDb,userAuthSettingsDb,userTokensDb,userRoleDb
})=> async (filter) =>{
  let user = await userDb.findAll(filter);
  if (user.length){
    let userIds = user.map((obj) => obj.id);

    const tagsFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const tagsCnt =  await tagsDb.count(tagsFilter);

    const review_statusFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const review_statusCnt =  await review_statusDb.count(review_statusFilter);

    const reviewsFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const reviewsCnt =  await reviewsDb.count(reviewsFilter);

    const product_variationsFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const product_variationsCnt =  await product_variationsDb.count(product_variationsFilter);

    const productFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const productCnt =  await productDb.count(productFilter);

    const categoryFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const categoryCnt =  await categoryDb.count(categoryFilter);

    const brandFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const brandCnt =  await brandDb.count(brandFilter);

    const userFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userCnt =  await userDb.count(userFilter);

    const userAuthSettingsFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userAuthSettingsCnt =  await userAuthSettingsDb.count(userAuthSettingsFilter);

    const userTokensFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userTokensCnt =  await userTokensDb.count(userTokensFilter);

    const userRoleFilter = { '$or': [{ userId : { '$in' : userIds } }] };
    const userRoleCnt =  await userRoleDb.count(userRoleFilter);
    let result = {
      tags :tagsCnt ,
      review_status :review_statusCnt ,
      reviews :reviewsCnt ,
      product_variations :product_variationsCnt ,
      product :productCnt ,
      category :categoryCnt ,
      brand :brandCnt ,
      user :userCnt + 1,
      userAuthSettings :userAuthSettingsCnt ,
      userTokens :userTokensCnt ,
      userRole :userRoleCnt ,
    };
    return response.success({
      message: 'No of Dependency found',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency found',
      data: {  user : 0 }
    });
  }
};

const deleteWithDependency = ({
  userDb,tagsDb,review_statusDb,reviewsDb,product_variationsDb,productDb,categoryDb,brandDb,userAuthSettingsDb,userTokensDb,userRoleDb
})=> async (filter) =>{
  let user = await userDb.findAll(filter);
  if (user.length){
    let userIds = user.map((obj) => obj.id);

    const tagsFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const tagsCnt =  (await tagsDb.destroy(tagsFilter)).length;

    const review_statusFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const review_statusCnt =  (await review_statusDb.destroy(review_statusFilter)).length;

    const reviewsFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const reviewsCnt =  (await reviewsDb.destroy(reviewsFilter)).length;

    const product_variationsFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const product_variationsCnt =  (await product_variationsDb.destroy(product_variationsFilter)).length;

    const productFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const productCnt =  (await productDb.destroy(productFilter)).length;

    const categoryFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const categoryCnt =  (await categoryDb.destroy(categoryFilter)).length;

    const brandFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const brandCnt =  (await brandDb.destroy(brandFilter)).length;

    const userFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userCnt =  (await userDb.destroy(userFilter)).length;

    const userAuthSettingsFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userAuthSettingsCnt =  (await userAuthSettingsDb.destroy(userAuthSettingsFilter)).length;

    const userTokensFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userTokensCnt =  (await userTokensDb.destroy(userTokensFilter)).length;

    const userRoleFilter = { '$or': [{ userId : { '$in' : userIds } }] };
    const userRoleCnt =  (await userRoleDb.destroy(userRoleFilter)).length;
    let deleted = (await userDb.destroy(filter)).length;
    let result = {
      tags :tagsCnt ,
      review_status :review_statusCnt ,
      reviews :reviewsCnt ,
      product_variations :product_variationsCnt ,
      product :productCnt ,
      category :categoryCnt ,
      brand :brandCnt ,
      user :userCnt + deleted,
      userAuthSettings :userAuthSettingsCnt ,
      userTokens :userTokensCnt ,
      userRole :userRoleCnt ,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  user : 0 }
    });
  }
};

const softDeleteWithDependency = ({
  userDb,tagsDb,review_statusDb,reviewsDb,product_variationsDb,productDb,categoryDb,brandDb,userAuthSettingsDb,userTokensDb,userRoleDb
}) => async (filter,updateBody) =>{
  let user = await userDb.findAll(filter);
  if (user.length){
    let userIds = user.map((obj) => obj.id);

    const tagsFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const tagsCnt =  (await tagsDb.update(tagsFilter,updateBody)).length;

    const review_statusFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const review_statusCnt =  (await review_statusDb.update(review_statusFilter,updateBody)).length;

    const reviewsFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const reviewsCnt =  (await reviewsDb.update(reviewsFilter,updateBody)).length;

    const product_variationsFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const product_variationsCnt =  (await product_variationsDb.update(product_variationsFilter,updateBody)).length;

    const productFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const productCnt =  (await productDb.update(productFilter,updateBody)).length;

    const categoryFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const categoryCnt =  (await categoryDb.update(categoryFilter,updateBody)).length;

    const brandFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const brandCnt =  (await brandDb.update(brandFilter,updateBody)).length;

    const userFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userCnt =  (await userDb.update(userFilter,updateBody)).length;

    const userAuthSettingsFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userAuthSettingsCnt =  (await userAuthSettingsDb.update(userAuthSettingsFilter,updateBody)).length;

    const userTokensFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userTokensCnt =  (await userTokensDb.update(userTokensFilter,updateBody)).length;

    const userRoleFilter = { '$or': [{ userId : { '$in' : userIds } }] };
    const userRoleCnt =  (await userRoleDb.update(userRoleFilter,updateBody)).length;
    let updated = (await userDb.update(filter,updateBody)).length;
    let result = {
      tags :tagsCnt ,
      review_status :review_statusCnt ,
      reviews :reviewsCnt ,
      product_variations :product_variationsCnt ,
      product :productCnt ,
      category :categoryCnt ,
      brand :brandCnt ,
      user :userCnt + updated,
      userAuthSettings :userAuthSettingsCnt ,
      userTokens :userTokensCnt ,
      userRole :userRoleCnt ,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  user : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
