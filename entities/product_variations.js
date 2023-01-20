module.exports = (product_variations) => {

  let newProduct_variations = { 
    id: product_variations.id,
    product_id: product_variations.product_id,
    title: product_variations.title,
    image_id: product_variations.image_id,
    SKU: product_variations.SKU,
    regular_price: product_variations.regular_price,
    selling_price: product_variations.selling_price,
    stock_status: product_variations.stock_status,
    length: product_variations.length,
    width: product_variations.width,
    height: product_variations.height,
    breadth: product_variations.breadth,
    weight: product_variations.weight,
    shipping_class: product_variations.shipping_class,
    description: product_variations.description,
    attributes: product_variations.attributes,
    isDeleted: product_variations.isDeleted,
    isActive: product_variations.isActive,
    createdAt: product_variations.createdAt,
    updatedAt: product_variations.updatedAt,
    addedBy: product_variations.addedBy,
    updatedBy: product_variations.updatedBy,
  };

  // remove undefined values
  if (newProduct_variations.id){
    Object.keys(newProduct_variations).forEach(key =>{
      if (newProduct_variations[key] === undefined) return newProduct_variations[key] = null;
    });
  } else {
    Object.keys(newProduct_variations).forEach(key => newProduct_variations[key] === undefined && delete newProduct_variations[key]);
  }

  // To validate Entity uncomment this block

  /*
   * const validate = (newProduct_variations) => {
   *   if (!newProduct_variations.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * 
   * validate(newProduct_variations) 
   */
  return Object.freeze(newProduct_variations);
};
