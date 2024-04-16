const Sequelize= require('sequelize');
const sequelize=require('../path/database');
const DataTypes=Sequelize;
const user=sequelize.define('user',{
    
    username: {
    type: DataTypes.STRING,
    allowNull: false
  },
    email: {
    type: DataTypes.STRING,
    allowNull: false,
  
  },
  phonenumber: {
    type: DataTypes.STRING,
    allowNull: false,
  
  }
});
module.exports = user;


