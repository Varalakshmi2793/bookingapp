const seq=require("sequelize");
const sequelize=new seq('userdetails','root','Password@123',{
   dialect:'mysql',
   host:'localhost'
})

async function Sequelizer(){
   try{
   sequelize.authenticate();
      console.log("connected successfully")
}
catch(err){
   console.log(err)
}
}
Sequelizer();
module.exports=sequelize;
