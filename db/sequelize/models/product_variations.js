const {
  DataTypes, Op 
} = require('sequelize'); 
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const  convertObjectToEnum  = require('../../../utils/convertObjectToEnum');
function makeModel (sequelize){
  const Product_variations = sequelize.define('product_variations',{
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    product_id:{ type:DataTypes.INTEGER },
    title:{ type:DataTypes.STRING },
    image_id:{ type:DataTypes.INTEGER },
    SKU:{ type:DataTypes.STRING },
    regular_price:{ type:DataTypes.INTEGER },
    selling_price:{ type:DataTypes.INTEGER },
    stock_status:{ type:DataTypes.STRING },
    length:{ type:DataTypes.INTEGER },
    width:{ type:DataTypes.INTEGER },
    height:{ type:DataTypes.INTEGER },
    breadth:{ type:DataTypes.INTEGER },
    weight:{ type:DataTypes.INTEGER },
    shipping_class:{ type:DataTypes.STRING },
    description:{ type:DataTypes.STRING },
    attributes:{ type:DataTypes.STRING },
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
        async function (product_variations,options){
          product_variations.isActive = true;
          product_variations.isDeleted = false;

        },
      ],
      beforeBulkCreate: [
        async function (product_variations,options){
          if (product_variations !== undefined && product_variations.length) { 
            for (let index = 0; index < product_variations.length; index++) { 
        
              const element = product_variations[index]; 
              element.isActive = true; 
              element.isDeleted = false; 
  
            } 
          }
        },
      ],
    } 
  }
  );
  Product_variations.prototype.toJSON = function () {
    let values = Object.assign({}, this.get());
    
    return values;
  };
  sequelizeTransforms(Product_variations);
  sequelizePaginate.paginate(Product_variations);
  return Product_variations;
}
module.exports = makeModel;