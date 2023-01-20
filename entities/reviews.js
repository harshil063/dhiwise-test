module.exports = (reviews) => {

  let newReviews = { 
    id: reviews.id,
    title: reviews.title,
    rating: reviews.rating,
    text: reviews.text,
    product_id: reviews.product_id,
    reviewer_id: reviews.reviewer_id,
    is_verified_purchase: reviews.is_verified_purchase,
    attachment_ids: reviews.attachment_ids,
    review_parent_id: reviews.review_parent_id,
    review_type: reviews.review_type,
    status: reviews.status,
    isDeleted: reviews.isDeleted,
    isActive: reviews.isActive,
    createdAt: reviews.createdAt,
    updatedAt: reviews.updatedAt,
    addedBy: reviews.addedBy,
    updatedBy: reviews.updatedBy,
  };

  // remove undefined values
  if (newReviews.id){
    Object.keys(newReviews).forEach(key =>{
      if (newReviews[key] === undefined) return newReviews[key] = null;
    });
  } else {
    Object.keys(newReviews).forEach(key => newReviews[key] === undefined && delete newReviews[key]);
  }

  // To validate Entity uncomment this block

  /*
   * const validate = (newReviews) => {
   *   if (!newReviews.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * 
   * validate(newReviews) 
   */
  return Object.freeze(newReviews);
};
