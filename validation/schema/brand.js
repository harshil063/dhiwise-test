const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('../commonFilterValidation');

const createSchema = joi.object({
  brand_id: joi.number().integer().allow(0),
  brand_name: joi.string().allow(null).allow(''),
  brand_desc: joi.string().allow(null).allow(''),
  isDeleted: joi.boolean(),
  isActive: joi.boolean()
}).unknown(true);

const updateSchema = joi.object({
  brand_id: joi.number().integer().allow(0),
  brand_name: joi.string().allow(null).allow(''),
  brand_desc: joi.string().allow(null).allow(''),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
let filterValidationSchema = joi.object({
  options: options,
  ...Object.fromEntries(keys.map(key => [key, joi.object({
    brand_id: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
    brand_name: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    brand_desc: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
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