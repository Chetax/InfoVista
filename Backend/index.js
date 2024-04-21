const express=require('express');
const mongose=require('mongoose');
require('dotenv').config();
const app=express();
app.use(express.json());
app.get('/singin',(req,res)=>{
    res.send(

    )
})
const mongostring=process.env.DATABASE_URL;
mongose.connect(mongostring);
const database = mongose.connection;

database.on('error', (error) => {
    console.log(error)
})
const Newroutes=require('./Routes/news');
app.use('/news',Newroutes)

database.once('connected', () => {
    console.log('Database Connected');
})
app.listen(process.env.PORT||4000,()=>(console.log(`Server Started At Port ${process.env.PORT}`)));


