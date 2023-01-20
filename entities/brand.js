module.exports = (brand) => {

  let newBrand = { 
    id: brand.id,
    brand_id: brand.brand_id,
    brand_name: brand.brand_name,
    brand_desc: brand.brand_desc,
    isDeleted: brand.isDeleted,
    isActive: brand.isActive,
    createdAt: brand.createdAt,
    updatedAt: brand.updatedAt,
    addedBy: brand.addedBy,
    updatedBy: brand.updatedBy,
  };

  // remove undefined values
  if (newBrand.id){
    Object.keys(newBrand).forEach(key =>{
      if (newBrand[key] === undefined) return newBrand[key] = null;
    });
  } else {
    Object.keys(newBrand).forEach(key => newBrand[key] === undefined && delete newBrand[key]);
  }

  // To validate Entity uncomment this block

  /*
   * const validate = (newBrand) => {
   *   if (!newBrand.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * 
   * validate(newBrand) 
   */
  return Object.freeze(newBrand);
};
