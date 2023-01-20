const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('../commonFilterValidation');

const createSchema = joi.object({
  tags_name: joi.string().allow(null).allow(''),
  slug: joi.string().allow(null).allow(''),
  description: joi.string().allow(null).allow(''),
  isDeleted: joi.boolean(),
  isActive: joi.boolean()
}).unknown(true);

const updateSchema = joi.object({
  tags_name: joi.string().allow(null).allow(''),
  slug: joi.string().allow(null).allow(''),
  description: joi.string().allow(null).allow(''),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
let filterValidationSchema = joi.object({
  options: options,
  ...Object.fromEntries(keys.map(key => [key, joi.object({
    tags_name: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    slug: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    description: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
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