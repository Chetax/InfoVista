const express=require('express');
const routes=express.Router();
const GetByKeyword=require('../Controller/ByKeyword');
const FetchAllNews=require('../Controller/FetchNews');
routes.get("/getByKeyword",GetByKeyword);
routes.get("/getevrything",FetchAllNews);
module.exports=routes;