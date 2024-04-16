const seq=require("sequelize");
const sequelize=new seq('userdetails','root','Password@123',{
   dialect:'mysql',
   host:'localhost'
})


module.exports=sequelize;
