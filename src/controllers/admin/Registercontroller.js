
const express=require('express');
const { User } = require('../../models/user');


let Registercontroller=(req,res)=>{

    const user = new User(req.body);
    user.save()
    .then((d)=>{
        res.status(200).json({
                msg:'done'
        })
    })
    
    .catch((e)=>{
        res.status(400).json({
            msg:'error'
        })
    })

   
}
exports.Registercontroller=Registercontroller

