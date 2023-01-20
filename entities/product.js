module.exports = (product) => {

  let newProduct = { 
    id: product.id,
    default_category_id: product.default_category_id,
    other_category_ids: product.other_category_ids,
    name: product.name,
    brand_id: product.brand_id,
    image_ids: product.image_ids,
    description: product.description,
    short_description: product.short_description,
    video_link: product.video_link,
    product_type: product.product_type,
    regular_price: product.regular_price,
    sale_price: product.sale_price,
    tax_status: product.tax_status,
    tax_claas: product.tax_claas,
    SKU: product.SKU,
    stock_quantity: product.stock_quantity,
    allow_backorders: product.allow_backorders,
    low_stock_threshold: product.low_stock_threshold,
    sold_individually: product.sold_individually,
    weight_value: product.weight_value,
    weight_unit: product.weight_unit,
    length: product.length,
    shipping_class: product.shipping_class,
    purchase_note: product.purchase_note,
    product_tagid: product.product_tagid,
    menu_order: product.menu_order,
    enable_reviews: product.enable_reviews,
    width: product.width,
    height: product.height,
    breadth: product.breadth,
    dimension_unit: product.dimension_unit,
    linked_product_id: product.linked_product_id,
    cross_sell_id: product.cross_sell_id,
    hsn_code_id: product.hsn_code_id,
    isDeleted: product.isDeleted,
    isActive: product.isActive,
    createdAt: product.createdAt,
    updatedAt: product.updatedAt,
    addedBy: product.addedBy,
    updatedBy: product.updatedBy,
  };

  // remove undefined values
  if (newProduct.id){
    Object.keys(newProduct).forEach(key =>{
      if (newProduct[key] === undefined) return newProduct[key] = null;
    });
  } else {
    Object.keys(newProduct).forEach(key => newProduct[key] === undefined && delete newProduct[key]);
  }

  // To validate Entity uncomment this block

  /*
   * const validate = (newProduct) => {
   *   if (!newProduct.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * 
   * validate(newProduct) 
   */
  return Object.freeze(newProduct);
};
