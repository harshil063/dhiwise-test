const response = require('../../../utils/response'); 
const responseHandler = require('../../../utils/response/responseHandler'); 
const getSelectObject = require('../../../utils/getSelectObject'); 

const addReviews = (addReviewsUsecase) => async (req,res) => {
  try {
    let dataToCreate = { ...req.body || {} };
    dataToCreate.addedBy = req.user.id;
    let result = await addReviewsUsecase(dataToCreate,req,res);
    return responseHandler(res,result);
  } catch (error){
    return responseHandler(res,response.internalServerError({ message:error.message }));
  }
};

const bulkInsertReviews = (bulkInsertReviewsUsecase)=> async (req,res) => {
  try {
    let dataToCreate = req.body.data;
    for (let i = 0;i < dataToCreate.length;i++){
      dataToCreate[i] = {
        ...dataToCreate[i],
        addedBy:req.user.id,
      };
    }
    let result = await bulkInsertReviewsUsecase(dataToCreate,req,res);
    return responseHandler(res,result);
  } catch (error){
    return responseHandler(res,response.internalServerError({ message:error.message }));
  }
};

const findAllReviews = (findAllReviewsUsecase) => async (req,res) => {
  try {
    let query = { ...req.body.query || {} };
    let options = { ...req.body.options || {} };
    let result = await findAllReviewsUsecase({
      query,
      options,
      isCountOnly:req.body.isCountOnly || false
    },req,res);
    return responseHandler(res,result);
  } catch (error){
    return responseHandler(res,response.internalServerError({ message:error.message }));
  }
};

const getReviews = (getReviewsUsecase) => async (req,res) =>{
  try {
    if (!req.params.id){
      return responseHandler(res,response.badRequest());
    }
    let options = {};
    let query = { id: req.params.id };
    let result = await getReviewsUsecase({
      query,
      options
    },req,res);
    return responseHandler(res,result);
  } catch (error) {
    return responseHandler(res,response.internalServerError({ message:error.message }));
  }
};

const getReviewsCount = (getReviewsCountUsecase) => async (req,res) => {
  try {
    let where = { ...req.body.where || {} };
    let result = await getReviewsCountUsecase({ where },req,res);  
    return responseHandler(res,result);
  } catch (error){
    return responseHandler(res,response.internalServerError({ message:error.message }));
  }
};

const updateReviews = (updateReviewsUsecase) => async (req,res) =>{
  try {
    if (!req.params.id){
      return responseHandler(res,response.badRequest({ message : 'Insufficient request parameters! id is required.' }));
    }
    let dataToUpdate = { ...req.body || {} };
    let query = { id: req.params.id };
    delete dataToUpdate.addedBy;
    delete dataToUpdate.updatedBy;
    dataToUpdate.updatedBy = req.user.id;
    let result = await updateReviewsUsecase({
      dataToUpdate,
      query
    },req,res);
    return responseHandler(res,result);
  } catch (error){
    return responseHandler(res,response.internalServerError({ message:error.message }));
  }
};

const bulkUpdateReviews = (bulkUpdateReviewsUsecase) => async (req,res) => {
  try {
    let dataToUpdate = { ...req.body.data || {} };
    let query = { ...req.body.filter || {} };
    delete dataToUpdate.addedBy;
    delete dataToUpdate.updatedBy;
    dataToUpdate.updatedBy = req.user.id;
    let result = await bulkUpdateReviewsUsecase({
      dataToUpdate,
      query
    },req,res);
    return responseHandler(res,result);
  } catch (error){
    return responseHandler(res,response.internalServerError({ message:error.message }));
  }
};

const partialUpdateReviews = (partialUpdateReviewsUsecase) => async (req,res) => {
  try {
    if (!req.params.id){
      return responseHandler(res,response.badRequest({ message : 'Insufficient request parameters! id is required.' }));
    }
    let query = { id: req.params.id };
    let dataToUpdate = req.body;
    delete dataToUpdate.updatedBy;
    dataToUpdate.updatedBy = req.user.id;
    let result = await partialUpdateReviewsUsecase({
      dataToUpdate,
      query
    },req,res);
    return responseHandler(res,result);
  } catch (error){
    return responseHandler(res,response.internalServerError({ message:error.message }));
  }
};

const softDeleteReviews = (softDeleteReviewsUsecase) => async (req,res)=>{
  try {
    if (!req.params.id){
      return responseHandler(res,response.badRequest({ message : 'Insufficient request parameters! id is required.' }));
    }
    let query = { id: req.params.id };
    const dataToUpdate = {
      isDeleted: true,
      updatedBy: req.user.id,
    };
    let result = await softDeleteReviewsUsecase({
      dataToUpdate,
      query
    },req,res);
    return responseHandler(res,result);
  } catch (error){
    return responseHandler(res,response.internalServerError({ message:error.message }));
  }
};

const deleteReviews = (deleteReviewsUsecase) => async (req,res) => {
  try {
    if (!req.params.id){
      return responseHandler(res,response.badRequest({ message : 'Insufficient request parameters! id is required.' }));
    }
    let query = { id: req.params.id };
    let result = await deleteReviewsUsecase({ query },req,res);
    return responseHandler(res,result);
  } catch (error){
    return responseHandler(res,response.internalServerError({ message:error.message }));
  }
};

const deleteManyReviews = (deleteManyReviewsUsecase) => async (req,res) => {
  try {
    if (!req.body || !req.body.ids){
      return responseHandler(res,response.badRequest({ message : 'Insufficient request parameters! ids field is required.' }));
    }
    let ids = req.body.ids;
    let query = { id : { $in:ids } };
    let result = await deleteManyReviewsUsecase(query,req,res);
    return responseHandler(res,result);
  } catch (error){
    return responseHandler(res,response.internalServerError({ message:error.message }));
  }
};

const softDeleteManyReviews = (softDeleteManyReviewsUsecase) => async (req,res) => {
  try {
    if (!req.body || !req.body.ids){
      return responseHandler(res,response.badRequest({ message : 'Insufficient request parameters! ids field is required.' }));
    }
    let ids = req.body.ids;
    let query = { id : { $in:ids } };
    const dataToUpdate = {
      isDeleted: true,
      updatedBy: req.user.id
    };
    let result = await softDeleteManyReviewsUsecase({
      dataToUpdate,
      query
    },req,res);
    return responseHandler(res,result);
  } catch (error){
    return responseHandler(res,response.internalServerError({ message:error.message }));
  }
};

module.exports = {
  addReviews,
  bulkInsertReviews,
  findAllReviews,
  getReviews,
  getReviewsCount,
  updateReviews,
  bulkUpdateReviews,
  partialUpdateReviews,
  softDeleteReviews,
  deleteReviews,
  deleteManyReviews,
  softDeleteManyReviews
};
