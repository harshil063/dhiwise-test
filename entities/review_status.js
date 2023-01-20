module.exports = (review_status) => {

  let newReview_status = { 
    id: review_status.id,
    text: review_status.text,
    color: review_status.color,
    isDeleted: review_status.isDeleted,
    isActive: review_status.isActive,
    createdAt: review_status.createdAt,
    updatedAt: review_status.updatedAt,
    addedBy: review_status.addedBy,
    updatedBy: review_status.updatedBy,
  };

  // remove undefined values
  if (newReview_status.id){
    Object.keys(newReview_status).forEach(key =>{
      if (newReview_status[key] === undefined) return newReview_status[key] = null;
    });
  } else {
    Object.keys(newReview_status).forEach(key => newReview_status[key] === undefined && delete newReview_status[key]);
  }

  // To validate Entity uncomment this block

  /*
   * const validate = (newReview_status) => {
   *   if (!newReview_status.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * 
   * validate(newReview_status) 
   */
  return Object.freeze(newReview_status);
};
