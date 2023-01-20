const {
  DataTypes, Op 
} = require('sequelize'); 
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const  convertObjectToEnum  = require('../../../utils/convertObjectToEnum');
function makeModel (sequelize){
  const Category = sequelize.define('category',{
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    category_name:{ type:DataTypes.STRING },
    category_desc:{ type:DataTypes.STRING },
    parent_category_id:{ type:DataTypes.INTEGER },
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
        async function (category,options){
          category.isActive = true;
          category.isDeleted = false;

        },
      ],
      beforeBulkCreate: [
        async function (category,options){
          if (category !== undefined && category.length) { 
            for (let index = 0; index < category.length; index++) { 
        
              const element = category[index]; 
              element.isActive = true; 
              element.isDeleted = false; 
  
            } 
          }
        },
      ],
    } 
  }
  );
  Category.prototype.toJSON = function () {
    let values = Object.assign({}, this.get());
    
    return values;
  };
  sequelizeTransforms(Category);
  sequelizePaginate.paginate(Category);
  return Category;
}
module.exports = makeModel;