const userDb = require('../../../../data-access/userDb');
const tagsDb = require('../../../../data-access/tagsDb');
const review_statusDb = require('../../../../data-access/review_statusDb');
const reviewsDb = require('../../../../data-access/reviewsDb');
const product_variationsDb = require('../../../../data-access/product_variationsDb');
const productDb = require('../../../../data-access/productDb');
const categoryDb = require('../../../../data-access/categoryDb');
const brandDb = require('../../../../data-access/brandDb');
const userAuthSettingsDb = require('../../../../data-access/userAuthSettingsDb');
const userTokensDb = require('../../../../data-access/userTokensDb');
const userRoleDb = require('../../../../data-access/userRoleDb');
const userSchema = require('../../../../validation/schema/user');
const createValidation = require('../../../../validation')(userSchema.createSchema);
const updateValidation = require('../../../../validation')(userSchema.updateSchema);
const filterValidation = require('../../../../validation')(userSchema.filterValidationSchema);
const userController = require('./user');

// use-cases imports with dependency injection
const changePasswordUsecase = require('../../../../use-case/user/changePassword')({ userDb });
const updateProfileUsecase = require('../../../../use-case/user/updateProfile')({
  userDb,
  updateValidation
});
const getUserUsecase = require('../../../../use-case/user/getUser')({
  userDb,
  filterValidation
});

// controller methods mapping
const changePassword = userController.changePassword(changePasswordUsecase);
const updateProfile = userController.updateProfile(updateProfileUsecase);
const getLoggedInUserInfo = userController.getLoggedInUserInfo(getUserUsecase);

module.exports = {
  changePassword,
  updateProfile,
  getLoggedInUserInfo,
};