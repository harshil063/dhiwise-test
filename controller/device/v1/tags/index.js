const tagsDb = require('../../../../data-access/tagsDb');
const tagsSchema = require('../../../../validation/schema/tags');
const createValidation = require('../../../../validation')(tagsSchema.createSchema);
const updateValidation = require('../../../../validation')(tagsSchema.updateSchema);
const filterValidation = require('../../../../validation')(tagsSchema.filterValidationSchema);
const tagsController = require('./tags');

// use-cases imports with dependency injection
const addTagsUsecase = require('../../../../use-case/tags/addTags')({
  tagsDb,
  createValidation 
});
const findAllTagsUsecase = require('../../../../use-case/tags/findAllTags')({
  tagsDb,
  filterValidation
});
const getTagsCountUsecase = require('../../../../use-case/tags/getTagsCount')({
  tagsDb,
  filterValidation
});
const getTagsUsecase = require('../../../../use-case/tags/getTags')({
  tagsDb,
  filterValidation
});
const updateTagsUsecase = require('../../../../use-case/tags/updateTags')({
  tagsDb,
  updateValidation 
});
const partialUpdateTagsUsecase = require('../../../../use-case/tags/partialUpdateTags')({
  tagsDb,
  updateValidation
});
const softDeleteTagsUsecase = require('../../../../use-case/tags/softDeleteTags')({ tagsDb });
const softDeleteManyTagsUsecase = require('../../../../use-case/tags/softDeleteManyTags')({ tagsDb });
const bulkInsertTagsUsecase = require('../../../../use-case/tags/bulkInsertTags')({ tagsDb });
const bulkUpdateTagsUsecase = require('../../../../use-case/tags/bulkUpdateTags')({ tagsDb });
const deleteTagsUsecase = require('../../../../use-case/tags/deleteTags')({ tagsDb });
const deleteManyTagsUsecase = require('../../../../use-case/tags/deleteManyTags')({ tagsDb });

// controller methods mapping
const addTags = tagsController.addTags(addTagsUsecase);
const findAllTags = tagsController.findAllTags(findAllTagsUsecase);
const getTagsCount = tagsController.getTagsCount(getTagsCountUsecase);
const getTagsById = tagsController.getTags(getTagsUsecase);
const updateTags = tagsController.updateTags(updateTagsUsecase);
const partialUpdateTags = tagsController.partialUpdateTags(partialUpdateTagsUsecase);
const softDeleteTags = tagsController.softDeleteTags(softDeleteTagsUsecase);
const softDeleteManyTags = tagsController.softDeleteManyTags(softDeleteManyTagsUsecase);
const bulkInsertTags = tagsController.bulkInsertTags(bulkInsertTagsUsecase);
const bulkUpdateTags = tagsController.bulkUpdateTags(bulkUpdateTagsUsecase);
const deleteTags = tagsController.deleteTags(deleteTagsUsecase);
const deleteManyTags = tagsController.deleteManyTags(deleteManyTagsUsecase);

module.exports = {
  addTags,
  findAllTags,
  getTagsCount,
  getTagsById,
  updateTags,
  partialUpdateTags,
  softDeleteTags,
  softDeleteManyTags,
  bulkInsertTags,
  bulkUpdateTags,
  deleteTags,
  deleteManyTags,
};