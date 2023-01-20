const {
  DataTypes, Op 
} = require('sequelize'); 
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const  convertObjectToEnum  = require('../../../utils/convertObjectToEnum');
function makeModel (sequelize){
  const Reviews = sequelize.define('reviews',{
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    title:{ type:DataTypes.STRING },
    rating:{ type:DataTypes.INTEGER },
    text:{ type:DataTypes.STRING },
    product_id:{ type:DataTypes.INTEGER },
    reviewer_id:{ type:DataTypes.INTEGER },
    is_verified_purchase:{ type:DataTypes.INTEGER },
    attachment_ids:{ type:DataTypes.STRING },
    review_parent_id:{ type:DataTypes.INTEGER },
    review_type:{ type:DataTypes.STRING },
    status:{ type:DataTypes.INTEGER },
    isDeleted:{ type:DataTypes.BOOLEAN },
    isActive:{ type:DataTypes.BOOLEAN },
    createdAt:{ type:DataTypes.DATE },
    updatedAt:{ type:DataTypes.DATE },
    addedBy:{ type:DataTypes.INTEGER },
    updatedBy:{ type:DataTypes.INTEGER }
  }
  ,{
    hooks:{
      beforeCreate: [
        async function (reviews,options){
          reviews.isActive = true;
          reviews.isDeleted = false;

        },
      ],
      beforeBulkCreate: [
        async function (reviews,options){
          if (reviews !== undefined && reviews.length) { 
            for (let index = 0; index < reviews.length; index++) { 
        
              const element = reviews[index]; 
              element.isActive = true; 
              element.isDeleted = false; 
  
            } 
          }
        },
      ],
    } 
  }
  );
  Reviews.prototype.toJSON = function () {
    let values = Object.assign({}, this.get());
    
    return values;
  };
  sequelizeTransforms(Reviews);
  sequelizePaginate.paginate(Reviews);
  return Reviews;
}
module.exports = makeModel;