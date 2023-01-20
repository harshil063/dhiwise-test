const {
  DataTypes, Op 
} = require('sequelize'); 
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const  convertObjectToEnum  = require('../../../utils/convertObjectToEnum');
function makeModel (sequelize){
  const Review_status = sequelize.define('review_status',{
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    text:{ type:DataTypes.STRING },
    color:{ type:DataTypes.STRING },
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
        async function (review_status,options){
          review_status.isActive = true;
          review_status.isDeleted = false;

        },
      ],
      beforeBulkCreate: [
        async function (review_status,options){
          if (review_status !== undefined && review_status.length) { 
            for (let index = 0; index < review_status.length; index++) { 
        
              const element = review_status[index]; 
              element.isActive = true; 
              element.isDeleted = false; 
  
            } 
          }
        },
      ],
    } 
  }
  );
  Review_status.prototype.toJSON = function () {
    let values = Object.assign({}, this.get());
    
    return values;
  };
  sequelizeTransforms(Review_status);
  sequelizePaginate.paginate(Review_status);
  return Review_status;
}
module.exports = makeModel;