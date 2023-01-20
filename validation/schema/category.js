const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('../commonFilterValidation');

const createSchema = joi.object({
  category_name: joi.string().allow(null).allow(''),
  category_desc: joi.string().allow(null).allow(''),
  parent_category_id: joi.number().integer().allow(0),
  isDeleted: joi.boolean(),
  isActive: joi.boolean()
}).unknown(true);

const updateSchema = joi.object({
  category_name: joi.string().allow(null).allow(''),
  category_desc: joi.string().allow(null).allow(''),
  parent_category_id: joi.number().integer().allow(0),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
let filterValidationSchema = joi.object({
  options: options,
  ...Object.fromEntries(keys.map(key => [key, joi.object({
    category_name: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    category_desc: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    parent_category_id: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
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