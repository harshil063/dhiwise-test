const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('../commonFilterValidation');

const createSchema = joi.object({
  title: joi.string().allow(null).allow(''),
  rating: joi.number().integer().allow(0),
  text: joi.string().allow(null).allow(''),
  product_id: joi.number().integer().allow(0),
  reviewer_id: joi.number().integer().allow(0),
  is_verified_purchase: joi.number().integer().allow(0),
  attachment_ids: joi.string().allow(null).allow(''),
  review_parent_id: joi.number().integer().allow(0),
  review_type: joi.string().allow(null).allow(''),
  status: joi.number().integer().allow(0),
  isDeleted: joi.boolean(),
  isActive: joi.boolean()
}).unknown(true);

const updateSchema = joi.object({
  title: joi.string().allow(null).allow(''),
  rating: joi.number().integer().allow(0),
  text: joi.string().allow(null).allow(''),
  product_id: joi.number().integer().allow(0),
  reviewer_id: joi.number().integer().allow(0),
  is_verified_purchase: joi.number().integer().allow(0),
  attachment_ids: joi.string().allow(null).allow(''),
  review_parent_id: joi.number().integer().allow(0),
  review_type: joi.string().allow(null).allow(''),
  status: joi.number().integer().allow(0),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
let filterValidationSchema = joi.object({
  options: options,
  ...Object.fromEntries(keys.map(key => [key, joi.object({
    title: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    rating: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
    text: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    product_id: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
    reviewer_id: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
    is_verified_purchase: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
    attachment_ids: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    review_parent_id: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
    review_type: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    status: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
    isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
    isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
    id: joi.any()
  }).unknown(true),])),
  isCountOnly: isCountOnly,
  include: joi.array().items(include),
  select: select
}).unknown(true);

module.exports = {
  createSchema,
  updateSchema,
  filterValidationSchema
};