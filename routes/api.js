const express=require('express');
const {makeid}=require('../mods/mods.js')

const router=express.Router();


router.get('/hitcat',function(req,res){
            var g=makeid();
         res.send(g);
 });

module.exports=router;
