const express=require('express');
const routes=express.Router();
const GetByKeyword=require('../Controller/ByKeyword');
routes.get("/getByKeyword",GetByKeyword);



module.exports=routes;