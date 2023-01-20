const dbConnection = require('../dbConnection');
const db = {};
db.sequelize = dbConnection;

db.tags = require('./tags')(dbConnection);

db.review_status = require('./review_status')(dbConnection);

db.reviews = require('./reviews')(dbConnection);

db.product_variations = require('./product_variations')(dbConnection);

db.product = require('./product')(dbConnection);

db.category = require('./category')(dbConnection);

db.brand = require('./brand')(dbConnection);

db.user = require('./user')(dbConnection);

db.userAuthSettings = require('./userAuthSettings')(dbConnection);

db.userTokens = require('./userTokens')(dbConnection);

db.role = require('./role')(dbConnection);

db.projectRoute = require('./projectRoute')(dbConnection);

db.routeRole = require('./routeRole')(dbConnection);

db.userRole = require('./userRole')(dbConnection);

db.tags.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.tags, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.tags.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.tags, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.review_status.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.review_status, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.review_status.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.review_status, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.reviews.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.reviews, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.reviews.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.reviews, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.product_variations.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.product_variations, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.product_variations.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.product_variations, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.product.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.product, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.product.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.product, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.category.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.category, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.category.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.category, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.brand.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.brand, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.brand.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.brand, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.user.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.user, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.user.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.user, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.userAuthSettings.belongsTo(db.user, {
  foreignKey: 'userId',
  as: '_userId',
  targetKey: 'id' 
});
db.user.hasMany(db.userAuthSettings, {
  foreignKey: 'userId',
  sourceKey: 'id' 
});
db.userAuthSettings.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.userAuthSettings, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.userAuthSettings.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.userAuthSettings, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.userTokens.belongsTo(db.user, {
  foreignKey: 'userId',
  as: '_userId',
  targetKey: 'id' 
});
db.user.hasMany(db.userTokens, {
  foreignKey: 'userId',
  sourceKey: 'id' 
});
db.userTokens.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.userTokens, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.userTokens.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.userTokens, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.userRole.belongsTo(db.user, {
  foreignKey: 'userId',
  as: '_userId',
  targetKey: 'id' 
});
db.user.hasMany(db.userRole, {
  foreignKey: 'userId',
  sourceKey: 'id' 
});
db.routeRole.belongsTo(db.role, {
  foreignKey: 'roleId',
  as: '_roleId',
  targetKey: 'id' 
});
db.role.hasMany(db.routeRole, {
  foreignKey: 'roleId',
  sourceKey: 'id' 
});
db.userRole.belongsTo(db.role, {
  foreignKey: 'roleId',
  as: '_roleId',
  targetKey: 'id' 
});
db.role.hasMany(db.userRole, {
  foreignKey: 'roleId',
  sourceKey: 'id' 
});
db.routeRole.belongsTo(db.projectRoute, {
  foreignKey: 'routeId',
  as: '_routeId',
  targetKey: 'id' 
});
db.projectRoute.hasMany(db.routeRole, {
  foreignKey: 'routeId',
  sourceKey: 'id' 
});

module.exports = db;