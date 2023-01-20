const {
  DataTypes, Op 
} = require('sequelize'); 
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const  convertObjectToEnum  = require('../../../utils/convertObjectToEnum');
function makeModel (sequelize){
  const Brand = sequelize.define('brand',{
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    brand_id:{ type:DataTypes.INTEGER },
    brand_name:{ type:DataTypes.STRING },
    brand_desc:{ type:DataTypes.STRING },
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
        async function (brand,options){
          brand.isActive = true;
          brand.isDeleted = false;

        },
      ],
      beforeBulkCreate: [
        async function (brand,options){
          if (brand !== undefined && brand.length) { 
            for (let index = 0; index < brand.length; index++) { 
        
              const element = brand[index]; 
              element.isActive = true; 
              element.isDeleted = false; 
  
            } 
          }
        },
      ],
    } 
  }
  );
  Brand.prototype.toJSON = function () {
    let values = Object.assign({}, this.get());
    
    return values;
  };
  sequelizeTransforms(Brand);
  sequelizePaginate.paginate(Brand);
  return Brand;
}
module.exports = makeModel;