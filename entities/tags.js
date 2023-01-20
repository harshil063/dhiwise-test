module.exports = (tags) => {

  let newTags = { 
    id: tags.id,
    tags_name: tags.tags_name,
    slug: tags.slug,
    description: tags.description,
    isDeleted: tags.isDeleted,
    isActive: tags.isActive,
    createdAt: tags.createdAt,
    updatedAt: tags.updatedAt,
    addedBy: tags.addedBy,
    updatedBy: tags.updatedBy,
  };

  // remove undefined values
  if (newTags.id){
    Object.keys(newTags).forEach(key =>{
      if (newTags[key] === undefined) return newTags[key] = null;
    });
  } else {
    Object.keys(newTags).forEach(key => newTags[key] === undefined && delete newTags[key]);
  }

  // To validate Entity uncomment this block

  /*
   * const validate = (newTags) => {
   *   if (!newTags.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * 
   * validate(newTags) 
   */
  return Object.freeze(newTags);
};
