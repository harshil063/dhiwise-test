const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('../commonFilterValidation');

const createSchema = joi.object({
  product_id: joi.number().integer().allow(0),
  title: joi.string().allow(null).allow(''),
  image_id: joi.number().integer().allow(0),
  SKU: joi.string().allow(null).allow(''),
  regular_price: joi.number().integer().allow(0),
  selling_price: joi.number().integer().allow(0),
  stock_status: joi.string().allow(null).allow(''),
  length: joi.number().integer().allow(0),
  width: joi.number().integer().allow(0),
  height: joi.number().integer().allow(0),
  breadth: joi.number().integer().allow(0),
  weight: joi.number().integer().allow(0),
  shipping_class: joi.string().allow(null).allow(''),
  description: joi.string().allow(null).allow(''),
  attributes: joi.string().allow(null).allow(''),
  isDeleted: joi.boolean(),
  isActive: joi.boolean()
}).unknown(true);

const updateSchema = joi.object({
  product_id: joi.number().integer().allow(0),
  title: joi.string().allow(null).allow(''),
  image_id: joi.number().integer().allow(0),
  SKU: joi.string().allow(null).allow(''),
  regular_price: joi.number().integer().allow(0),
  selling_price: joi.number().integer().allow(0),
  stock_status: joi.string().allow(null).allow(''),
  length: joi.number().integer().allow(0),
  width: joi.number().integer().allow(0),
  height: joi.number().integer().allow(0),
  breadth: joi.number().integer().allow(0),
  weight: joi.number().integer().allow(0),
  shipping_class: joi.string().allow(null).allow(''),
  description: joi.string().allow(null).allow(''),
  attributes: joi.string().allow(null).allow(''),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
let filterValidationSchema = joi.object({
  options: options,
  ...Object.fromEntries(keys.map(key => [key, joi.object({
    product_id: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
    title: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    image_id: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
    SKU: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    regular_price: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
    selling_price: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
    stock_status: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    length: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
    width: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
    height: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
    breadth: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
    weight: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
    shipping_class: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    description: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    attributes: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
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