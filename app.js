const express=require('express');

const bodyparser=require('body-parser');
const sequelizer=require('./path/database');
const userroutes=require('./router/insert');
const cors=require('cors');
const path=require('path')
const app=express();
app.use(cors());

app.use(bodyparser.json());

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname,'public')));


app.use('/api', userroutes);
sequelizer.sync().then(()=>{
    console.log("databse synched")
})

.catch(err =>{
    console.log(err);
});

app.listen(2095);

