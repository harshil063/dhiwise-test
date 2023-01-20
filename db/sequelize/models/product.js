const {
  DataTypes, Op 
} = require('sequelize'); 
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const  convertObjectToEnum  = require('../../../utils/convertObjectToEnum');
function makeModel (sequelize){
  const Product = sequelize.define('product',{
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    default_category_id:{ type:DataTypes.INTEGER },
    other_category_ids:{ type:DataTypes.STRING },
    name:{ type:DataTypes.STRING },
    brand_id:{ type:DataTypes.INTEGER },
    image_ids:{ type:DataTypes.STRING },
    description:{ type:DataTypes.STRING },
    short_description:{ type:DataTypes.STRING },
    video_link:{ type:DataTypes.STRING },
    product_type:{ type:DataTypes.STRING },
    regular_price:{ type:DataTypes.INTEGER },
    sale_price:{ type:DataTypes.INTEGER },
    tax_status:{ type:DataTypes.STRING },
    tax_claas:{ type:DataTypes.STRING },
    SKU:{ type:DataTypes.STRING },
    stock_quantity:{ type:DataTypes.INTEGER },
    allow_backorders:{ type:DataTypes.STRING },
    low_stock_threshold:{ type:DataTypes.INTEGER },
    sold_individually:{ type:DataTypes.INTEGER },
    weight_value:{ type:DataTypes.INTEGER },
    weight_unit:{ type:DataTypes.INTEGER },
    length:{ type:DataTypes.INTEGER },
    shipping_class:{ type:DataTypes.STRING },
    purchase_note:{ type:DataTypes.STRING },
    product_tagid:{ type:DataTypes.INTEGER },
    menu_order:{ type:DataTypes.INTEGER },
    enable_reviews:{ type:DataTypes.INTEGER },
    width:{ type:DataTypes.INTEGER },
    height:{ type:DataTypes.INTEGER },
    breadth:{ type:DataTypes.INTEGER },
    dimension_unit:{ type:DataTypes.INTEGER },
    linked_product_id:{ type:DataTypes.INTEGER },
    cross_sell_id:{ type:DataTypes.INTEGER },
    hsn_code_id:{ type:DataTypes.INTEGER },
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
        async function (product,options){
          product.isActive = true;
          product.isDeleted = false;

        },
      ],
      beforeBulkCreate: [
        async function (product,options){
          if (product !== undefined && product.length) { 
            for (let index = 0; index < product.length; index++) { 
        
              const element = product[index]; 
              element.isActive = true; 
              element.isDeleted = false; 
  
            } 
          }
        },
      ],
    } 
  }
  );
  Product.prototype.toJSON = function () {
    let values = Object.assign({}, this.get());
    
    return values;
  };
  sequelizeTransforms(Product);
  sequelizePaginate.paginate(Product);
  return Product;
}
module.exports = makeModel;