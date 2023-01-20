const {
  DataTypes, Op 
} = require('sequelize'); 
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const  convertObjectToEnum  = require('../../../utils/convertObjectToEnum');
function makeModel (sequelize){
  const Tags = sequelize.define('tags',{
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    tags_name:{ type:DataTypes.STRING },
    slug:{ type:DataTypes.STRING },
    description:{ type:DataTypes.STRING },
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
        async function (tags,options){
          tags.isActive = true;
          tags.isDeleted = false;

        },
      ],
      beforeBulkCreate: [
        async function (tags,options){
          if (tags !== undefined && tags.length) { 
            for (let index = 0; index < tags.length; index++) { 
        
              const element = tags[index]; 
              element.isActive = true; 
              element.isDeleted = false; 
  
            } 
          }
        },
      ],
    } 
  }
  );
  Tags.prototype.toJSON = function () {
    let values = Object.assign({}, this.get());
    
    return values;
  };
  sequelizeTransforms(Tags);
  sequelizePaginate.paginate(Tags);
  return Tags;
}
module.exports = makeModel;